import React from 'react';
import PropTypes from 'prop-types'
import stocks from '../constants/stocks'


const Filter = ({handleFilterChange}) => (
    <select onChange={handleFilterChange}>
        <option value="ALL" key='all'>ALL</option>
        {stocks.map(value => <option value={value} key={value}>{value}</option>)}
    </select>
);

Filter.propTypes = {
    handleFilterChange: PropTypes.func.isRequired
}

export default Filter;