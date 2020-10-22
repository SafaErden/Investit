import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { stocksFilter } from '../actions';
import Filter from './Filter';

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
        <div className="row my-3 p-0">
          <div className="col-12 d-flex justify-content-end">
            ,
            <span className="text-white">Filter By Source:  </span>
            <Filter handleFilterChange={this.handleFilterChange} />
          </div>
        </div>
      );
    }
}

Header.propTypes = {
  stocksFilter: PropTypes.func.isRequired,
};

const mapDispatchToProps = { stocksFilter };

export default connect(null, mapDispatchToProps)(Header);
