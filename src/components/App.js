import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from '../containers/Header';
import Footer from '../containers/Footer';
import NewsList from '../containers/NewsList';
import NewsDetail from '../containers/NewsDetail';


function App() {
  return (
    <div className="container">
      <Header />
      <BrowserRouter>
        <Route path="/" exact component={NewsList}/>
        <Route path="/detail"  component={NewsDetail}/>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;

