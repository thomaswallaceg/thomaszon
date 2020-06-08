require('dotenv').config();
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const logger = require('morgan');
const cors = require('cors');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sequelizeInstance = require('./models/sequelize');

const loginRouter = require('./routes/login');
const productsRouter = require('./routes/products');

const app = express();

const myStore = new SequelizeStore({ db: sequelizeInstance });
myStore.sync();

app.use(
  session({
    secret: 'a_random_secret_for_thomaszon',
    store: myStore,
    resave: true,
    saveUninitialized: false,
    proxy: true,
    cookie: {
      maxAge: 99999999,
      sameSite: 'lax',
    },
  }),
);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(cors({
  credentials: true,
}));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/login', loginRouter);
app.use('/products', productsRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
