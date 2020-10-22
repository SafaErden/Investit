import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Stock from '../components/Stock';
import Header from './Header';

const NewsList = ({ stocks, filter }) => {
  let stockList;
  if (filter === 'ALL') {
    stockList = stocks.map(stock => <Stock stock={stock} key={Math.random()} />);
  } else {
    stockList = stocks
      .filter(stock => stock.symbol === filter)
      .map(stock => (
        <Stock stock={stock} key={Math.random()} />
      ));
  }

  return (
    <div>
      <Header />
      <div className="row">
        {stockList}
      </div>

    </div>
  );
};

NewsList.propTypes = {
  filter: PropTypes.string.isRequired,
  stocks: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => ({
  stocks: state.stocks.news,
  filter: state.filter,
});

export default connect(mapStateToProps)(NewsList);
