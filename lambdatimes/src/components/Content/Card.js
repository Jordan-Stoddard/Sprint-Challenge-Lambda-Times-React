import React from 'react';
import PropTypes from 'prop-types'

const Card = props => {
  
  return (
    <div className="card">
      <div className="headline">{props.cards.headline}</div>
      <div className="author">
        <div className="img-container">
          <img src={props.cards.img} alt="author"/>
        </div>
        <span>By {props.cards.author}</span>
      </div>
    </div>
  );
};

// Make sure to include PropTypes.

Card.propTypes = {
 cards: PropTypes.shape({
   headline: PropTypes.string.isRequired,
   img: PropTypes.string.isRequired,
   author: PropTypes.string.isRequired
 })
 
}

export default Card;
