import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { stocksFilter } from '../actions/';
import Filter from '../components/Filter';

class Header extends React.Component {
    constructor(props) {
      super(props);
      this.handleFilterChange = this.handleFilterChange.bind(this);
    }
    handleFilterChange = e => {
        const { stocksFilter } = this.props;
        stocksFilter(e.target.value);
      }
    render() {
        return (
            <div className="row  bg-primary">
                <div className="col-3 d-flex align-items-center">Stock News</div>
                <div className="col-9 d-flex justify-content-end">
                    <ul className="list-group list-group-horizontal">
                        <li className="list-group-item"><Filter handleFilterChange={this.handleFilterChange}/></li>
                        <li className="list-group-item">Sign In</li>
                        <li className="list-group-item">Sign Up</li>
                    </ul>
                </div>
            </div>
        );
    }
}

Header.protoTypes = {
    stocksFilter: PropTypes.func.isRequired,
    filter: PropTypes.string.isRequired
}

const mapStateToProps = state => ({
    filter: state.filter
});

const mapDispatchToProps = {stocksFilter}

export default connect(mapStateToProps, mapDispatchToProps)(Header);

