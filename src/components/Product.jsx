import React from 'react';
import PropTypes from 'prop-types';

const Product = ({ imgUrl, name, price, children }) => console.log(children) || (
  <div>
    <img src={imgUrl} alt={name} width="640" />
    <h2>{name}</h2>
    <p>Price: {price}$</p>
    <button type="button">Add to cart</button>
  </div>
);

Product.defaultProps = {
  alt: 'product image'
}

Product.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  alt: PropTypes.string,
  name:PropTypes.string.isRequired,
  price:PropTypes.number.isRequired
}

export default Product;
