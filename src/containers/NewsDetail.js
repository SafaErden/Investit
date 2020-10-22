import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NewsDetail = ({ stock }) => {
  const {
    symbol, title, image, url, text, site
  } = stock[0];

  return (
    <div className="border w-100 d-flex justify-content-center my-4 flex-column rounded shadow-lg">
      <img className="w-100 w-md-50 w-lg-25" src={image} alt={title} />
      <div className="card text-center">
        <div className="card-header">
          {symbol}
        </div>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
          <Link to="/" className="btn btn-primary">Go Back</Link>
          <a href={url} rel="noreferrer" className="btn btn-primary ml-2" target="_blank">Visit Source</a>
        </div>
        <div className="card-footer text-muted">
          By:
          {' '}
          {site}
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps.match.params;
  return {
    stock: state.stocks.news.filter(stock => stock.id == id), // eslint-disable-line
  };
};
NewsDetail.propTypes = {
  stock: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default connect(mapStateToProps)(NewsDetail);
