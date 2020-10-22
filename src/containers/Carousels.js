import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const BootstrapCarousel = ({ stocks }) => {
  const stockList = stocks.map(stock => (
    <Carousel.Item style={{ height: '400px' }} key={Math.random()}>
      <img
        style={{ height: '400px' }}
        className="d-block w-100"
        src={stock.image}
        alt={stock.title}
      />
      <Carousel.Caption>
        <h3 className="bg-dark">{stock.title}</h3>
      </Carousel.Caption>
    </Carousel.Item>
  ));
  return (
    <div>
      <div className="container-fluid">
        <Carousel>
          {stockList}
        </Carousel>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  stocks: state.stocks.news,
});

BootstrapCarousel.propTypes = {
  stocks: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(BootstrapCarousel);
