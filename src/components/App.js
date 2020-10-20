import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Carousels from '../containers/Carousels';
import Footer from '../containers/Footer';
import NewsList from '../containers/NewsList';
import NewsDetail from '../containers/NewsDetail';
import { setStocks } from '../actions/';
import { connect } from 'react-redux';


class App extends React.Component {

  componentDidMount () {
     const { setStocks} = this.props;
     setStocks();
 }
  render(){
    return (
      <div className="container">
       <Carousels />
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={NewsList}/>
            <Route path="/detail/:id"  component={NewsDetail}/>
          </Switch>
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}
const mapDispatchToProps = {setStocks}

export default connect(null,mapDispatchToProps)(App);

