import stocksApi from '../api';

const newsApi = '258bdd87faa24b3794b400f85b9eb600';
export const setStocks = () => async dispatch => {
  const response = await stocksApi.get(`/everything?q=stocks&from=2020-10-01&sortBy=publishedAt&apiKey=${newsApi}`);
  response.data.articles.map((article, id) => article.id = id); // eslint-disable-line
  dispatch({ type: 'SET_STOCKS', stocks: response.data.articles });

  const sources = response.data.articles.map(stock => stock.source.name);

  const unique = [...new Set(sources)];
  dispatch({ type: 'SET_FILTERS', filters: unique });
};
export const stocksFilter = source => ({
  type: 'CHANGE_FILTER',
  source,
});
