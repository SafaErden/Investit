const stockReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_STOCKS':
      return action.stocks;
    default:
      return state;
  }
};

export default stockReducer;
