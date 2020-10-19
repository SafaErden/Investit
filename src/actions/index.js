
import booksApi from '../api/api';
const config = {
  headers: {
    Authorization: 'Token ' + "status"
  }
 }
 /*
export const setBooks = () => async dispatch => {
  const response = await booksApi.get('/books', config);
  dispatch({ type: 'SET_BOOKS', books: response.data });
};
*/