const filterReducer = (state = 'ALL', action) => {
  if (action.source) {
    return action.source;
  }
  return state;
};

export default filterReducer;
