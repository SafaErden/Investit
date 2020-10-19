import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware  } from 'redux';
import { Provider } from 'react-redux';
import mainReducer from './reducers/index';
import thunk from 'redux-thunk';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css';



const store = createStore(mainReducer, {}, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
