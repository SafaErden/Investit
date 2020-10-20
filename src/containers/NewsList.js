import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setStocks } from '../actions/';
import Stock from '../components/Stock'


class NewsList extends React.Component {

     componentDidMount () {
        const { setStocks} = this.props;
        setStocks();
    }

    render() {
        const { stocks, filter } = this.props;
        
        let stockList;
        if (filter === 'ALL') {
            stockList = stocks.map(stock =>{  
                if(stock.author!=null){
            return <Stock stock={stock} key={Math.random()}/>
            }});
        } else {
            stockList = stocks
            .filter(stock => stock.source.name === filter)
            .map(stock => (
                <Stock  stock={stock} key={Math.random()} />
            ));
        }
        
        return (
                <div className="row">
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