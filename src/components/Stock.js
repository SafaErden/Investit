import React from 'react';
import PropTypes from 'prop-types';

const Stock = ({stock}) => {
  const { symbol, title, text, url } = stock;
  return(
      <div>
          <div>{symbol}</div>
          <div>{title}</div>
          <div>{text}</div>
          <div>{url}</div>
      </div>
  )
};

Stock.propTypes = {
    stock: PropTypes.object.isRequired
  };
  export default Stock;