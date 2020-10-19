const filterReducer = (state='ALL' , action) => {
    if(action.stock) {
        const updated = action.stock;
        return updated;
    }
    return state;
}

export default filterReducer;