
import stocksApi from '../api/';
const newsApi = "d5ee384ec49743598a3fe5d0a7d7ffe3"
export const setStocks = () => async dispatch => {
  const response = await stocksApi.get(`/everything?q=stocks&from=2020-09-20&sortBy=publishedAt&apiKey=${newsApi}`);
  response.data['articles'].map((article,id) => 
    article.id = id
  );
  dispatch({ type: 'SET_STOCKS', stocks: response.data['articles']});
  
  let sources = response.data['articles'].map(stock => stock.source.name);;
      
  let unique = [...new Set(sources)];
  dispatch({ type: 'SET_FILTERS', filters: unique});
};
export const stocksFilter = source => ({
  type: 'CHANGE_FILTER',
  source
})

