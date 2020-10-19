
import stocksApi from '../api/';
 const apiKey = "0378d78815afdaa0803653fff5dc0d77"
 
export const setStocks = () => async dispatch => {
  const response = await stocksApi.get(`stock_news?limit=50&apikey=${apiKey}`);
  dispatch({ type: 'SET_STOCKS', stocks: response.data});
};
export const stocksFilter = stock => ({
  type: 'CHANGE_FILTER',
  stock
})