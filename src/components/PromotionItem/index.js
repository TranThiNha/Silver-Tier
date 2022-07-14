import React from 'react';

const PromotionItem = (props) => {
  return (
    <div className='card promotion-item' key={Date.now()}>
      {/* <img src='...' className='card-img-top' alt='...' /> */}
      <div className='card-body'>
        <h5 className='card-title'>Card title</h5>
        <p className='card-text'>
          Some quick example up the bulk of the card's content.
        </p>
      </div>
    </div>
  );
};

export default PromotionItem;
