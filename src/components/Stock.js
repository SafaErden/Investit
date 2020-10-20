import React from 'react';
import PropTypes from 'prop-types';

const Stock = ({stock}) => {
  const { author, title, source, urlToImage } = stock;
  return(
      <div className="border col-12 col-md-6 col-xl-4">
          <div>Author: {author}</div>
          <div>Description: {title}</div>
          <div>source: {source['name']}</div>
          <div>image: <img className="w-100" src={urlToImage} alt={title}/></div>
      </div>
  )
};

Stock.propTypes = {
    stock: PropTypes.object.isRequired
  };
  export default Stock;