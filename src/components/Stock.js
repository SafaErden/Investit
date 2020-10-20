import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Stock = ({stock}) => {
  const { id, author, title, source, urlToImage } = stock;
  return(
      <div className="border col-12 col-md-6 col-xl-4">
          <div>Author: {author}</div>
          <div>Description: {`${title.slice(0, 23)}...`}</div>
          <div>source: {source['name']}</div>
          <Link to={`/detail/${id}`} detail={stock}>Protected Page</Link>
          <div>image: <img className="w-100" src={urlToImage} alt={title}/></div>
      </div>
  )
};

Stock.propTypes = {
    stock: PropTypes.object.isRequired
  };
  export default Stock;