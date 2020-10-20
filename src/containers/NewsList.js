import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Stock from '../components/Stock';
import Header from '../containers/Header';


class NewsList extends React.Component {

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
            <div>
            <Header />
                <div className="row">
                    {stockList}
                </div>

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

export default connect(mapStateToProps)(NewsList);