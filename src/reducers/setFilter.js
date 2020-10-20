const setFilters = (state=['ALL'] , action) => {
    if(action.filters) {
        return [...state, ...action.filters];
    }
    return state;
}

export default setFilters;