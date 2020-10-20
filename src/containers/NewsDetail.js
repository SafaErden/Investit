import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';



const NewsDetail = ({stock}) => {
    const { id, author, title, source, urlToImage } = stock[0];
    return (
        <div className="border col-12 col-md-6 col-xl-4">
              <div>Author: {author}</div>
          <Link to={"/"}>BACK</Link>
          <div>image: <img className="w-100" src={urlToImage} alt={title}/></div>
      </div>
    );

}

const mapStateToProps = (state, ownProps) => {
    const { id } = ownProps.match.params;
    return {
        stock: state.stocks.filter(stock => stock.id == id)
    };
}

NewsDetail.propTypes = {
    stock: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default connect(mapStateToProps)(NewsDetail);