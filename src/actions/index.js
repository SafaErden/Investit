import stocksApi from '../api';

const newsApi = '0378d78815afdaa0803653fff5dc0d77';
export const setStocks = () => async dispatch => {
  dispatch({ type: 'SET_STOCKS_BEGIN' });
  const response = await stocksApi.get(`stock_news?limit=50&apikey=${newsApi}`);
  
  response.data.map((article, id) => article.id = id); // eslint-disable-line

  dispatch({ type: 'SET_STOCKS_SUCCESS', stocks: response.data });
  
  const sources = response.data.map(stock => stock.symbol);
 
  const unique = [...new Set(sources)];
  dispatch({ type: 'SET_FILTERS', filters: unique });

  
};
export const stocksFilter = source => ({
  type: 'CHANGE_FILTER',
  source,
});
