import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Stock = ({stock}) => {
  const { id, author, title, source, urlToImage } = stock;
  return(
      <div className="col-12 col-md-6 col-xl-4 my-2 shadow-lg">
          <div className="card" style={{}}>
            <img className="card-img-top" src={urlToImage} alt={title}/>
            <div className="card-body">
              <h5 className="card-title">{source['name']}</h5>
              <p className="card-text">{title}</p>
              <Link to={`/detail/${id}`}  className="btn btn-primary">Details</Link>
            </div>
          </div>
      </div>
  )
};

Stock.propTypes = {
    stock: PropTypes.object.isRequired
  };
  export default Stock;