import React from 'react';
import '../assets/home.css';

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const products = [];
    for (let i = 0; i < 100; i += 1) {
      products[i] = <ProductPreview />;
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
            {products}
          </div>
        </div>
      </div>
    );
  }
}

function ProductPreview() {
  return (
    <div className="home-product">
      <img className="home-product-image" src="http://lorempixel.com/640/480/" alt="product img" />
      <h3 className="home-product-title">Name</h3>
      <p className="home-product-description">Description desc descrip de descri d des description asdf asdf asdf aasdf asdf asdfasdfasd ffasdfasd</p>
      <div className="home-product-bottomrow">
        <p className="home-product-price">$price</p>
        <p className="home-product-stock">stock</p>
      </div>
    </div>
  );
}

export default Homepage;
