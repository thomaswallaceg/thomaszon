import React from 'react';
import PropTypes from 'prop-types';
import { ProductController } from '../networking/ProductController';
import '../assets/home.css';

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { products: [] };
  }

  async componentDidMount() {
    const products = await ProductController.getAllProducts();
    this.setState({ products });
  }

  render() {
    const renderProducts = [];
    for (let i = 0; i < this.state.products.length; i += 1) {
      const p = this.state.products[i];
      renderProducts[i] = (
        <ProductPreview
          key={p.id}
          name={p.name}
          description={p.description}
          stock={p.stock}
          image={p.image}
        />
      );
    }

    return (
      <div className="home-page">
        <div className="home-title-bar">
          <h1 className="home-title-logo">thomaszon</h1>
          <div className="home-title-settings">
            <p>Account</p>
            <p>Sign out</p>
          </div>
        </div>
        <div className="home-content">
          <div className="home-menu">
            <ul>
              <li>Products</li>
              <li>Account</li>
              <li>Help</li>
              <li>Bla bla bla</li>
            </ul>
          </div>
          <div className="home-product-view">
            {renderProducts}
          </div>
        </div>
      </div>
    );
  }
}

function ProductPreview(props) {
  return (
    <div className="home-product">
      <img className="home-product-image" src={props.image} alt="product img" />
      <h3 className="home-product-title">{props.name}</h3>
      <p className="home-product-description">{props.description}</p>
      <div className="home-product-bottomrow">
        <p className="home-product-price">$5</p>
        <p className="home-product-stock">{`${props.stock} in stock.`}</p>
      </div>
    </div>
  );
}

ProductPreview.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  stock: PropTypes.number,
  image: PropTypes.string,
};

ProductPreview.defaultProps = {
  name: '',
  description: '',
  stock: 0,
  image: '',
};

export { Homepage };
