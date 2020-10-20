import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';



const NewsDetail = ({stock}) => {
    const { url, author, title, source, description, urlToImage } = stock[0];
    
    return (
        <div className="border w-100 d-flex justify-content-center mt-3 flex-column rounded shadow-lg">
            <img className="w-100" src={urlToImage} alt={title} />
            <div class="card text-center">
                <div class="card-header">
                    {source.name}
                </div>
                <div class="card-body">
                    <h5 class="card-title">{title}</h5>
                    <p class="card-text">{description}</p>
                    <Link to={"/"} className="btn btn-primary">Go Back</Link>
                    <a href={url} class="btn btn-primary ml-2" target="_blank">Visit Source</a>
                </div>
                <div class="card-footer text-muted">
                    By: {author}
                </div>
            </div>
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