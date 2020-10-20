import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


const Filter = ({handleFilterChange,filters}) => (
    <select onChange={handleFilterChange} className="text-white bg-dark">
        {filters.map(value => <option value={value} key={value}>{value}</option>)}
    </select>
);

Filter.propTypes = {
    handleFilterChange: PropTypes.func.isRequired,
    filters: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    filters: state.filters
});


export default connect(mapStateToProps)(Filter);