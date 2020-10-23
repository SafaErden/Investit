const initialState = {
  news: [],
  loading: false,
};

const stockReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_STOCKS_SUCCESS':
      return {
        news: action.stocks,
        loading: false,
      };
    case 'SET_STOCKS_BEGIN':
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default stockReducer;
