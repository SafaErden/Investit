import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Carousels from '../containers/Carousels';
import NavBar from '../containers/NavBar';
import Footer from '../containers/Footer';
import NewsList from '../containers/NewsList';
import NewsDetail from '../containers/NewsDetail';
import { setStocks } from '../actions';

class App extends React.Component {
  componentDidMount() {
    const { setStocks } = this.props;
    setStocks();
  }

  render() {
    return (
      <div>
        <NavBar />
        <div className="container">
          <Carousels />
          <BrowserRouter>
            <Switch>
              <Route path="/" exact component={NewsList} />
              <Route path="/detail/:id" component={NewsDetail} />
            </Switch>
          </BrowserRouter>
        </div>
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  setStocks: PropTypes.func.isRequired,
};

const mapDispatchToProps = { setStocks };

export default connect(null, mapDispatchToProps)(App);
