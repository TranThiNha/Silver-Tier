import React from 'react';

const PromotionItem = (props) => {
  const { data } = props;

  return (
    <div className='card promotion-item' key={Date.now()}>
      <img
        src={require(`assets/media/${data.thumbnail}.svg`)}
        className='card-img-top'
        alt='...'
      />
      <div className='card-body'>
        <h5
          className={`card-title ${
            data.status === 'higher' ? 'higher-coins' : ''
          }`}
        >
          {data.status === 'higher' && (
            <img src={require(`assets/media/higher.svg`)} />
          )}

          <span>{data.price} Coins</span>
        </h5>
        <p className='card-text'>{data.description}</p>
      </div>
    </div>
  );
};

export default PromotionItem;
