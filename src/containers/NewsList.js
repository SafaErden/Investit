import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setStocks } from '../actions/';
import Stock from '../components/Stock'


class NewsList extends React.Component {
    componentDidMount () {
        const { setStocks } = this.props;
        setStocks();
      }
    render() {
        const { stocks, filter } = this.props;
        if(stocks){console.log(stocks.length);}
        let stockList;
        if (filter === 'ALL') {
            stockList = stocks.map(stock => (
            <Stock stock={stock} key={Math.random()}/>
            ));
        } else {
            stockList = stocks
            .filter(stock => stock.symbol === filter)
            .map(stock => (
                <Stock  Stock={Stock} key={Math.random()} />
            ));
        }
        
        return (
            <div>
               {stockList}
            </div>
        );
    }
}

NewsList.protoTypes = {
    filter: PropTypes.string.isRequired
}

const mapStateToProps = state => ({
    stocks: state.stocks,
    filter: state.filter
});

const mapDispatchToProps = {setStocks}

export default connect(mapStateToProps,mapDispatchToProps)(NewsList);