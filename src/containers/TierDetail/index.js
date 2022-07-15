import React from 'react';
import { PromotionItem, NavigationBar } from 'components';
import { SAMPLE } from './sample';
import bgImage from 'assets/media/background-coin.png';

const TierDetail = (props) => {
  const renderAvailableCoin = () => {
    return (
      <div
        className='available-coin'
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className='box-name'>Available Coin balance</div>
        <div className='value-coin'>340</div>

        <div className='progress'>
          <div className='progress-bar' role='progressbar'></div>
        </div>

        <div className='description'>
          You have paid rental fee for $1,200. Pay more $800 to achieve Gold
          Tier.
        </div>

        <a href='#' className='link-benefit'>
          View tier benefits
          <img src={require('assets/media/right-arrow.svg')} />
        </a>

        <button type='button' className='btn btn-primary'>
          My Coupons
        </button>

        <div className='date'>Updated : 02/11/2021</div>
      </div>
    );
  };

  const renderBanner = () => {
    return (
      <div className='banner'>
        <div className='arrow-bounder'>
          <img src={require('assets/media/left-arrow.svg')} />
        </div>

        <div className='title'>Silver Tier</div>
        <div className='subtitle'>
          In Silver Tier, every $1 in rental fee paid, you get 2 coins to redeem
          exclusive rewards.
        </div>
      </div>
    );
  };

  return (
    <div className='tier-detail'>
      {renderBanner()}

      {renderAvailableCoin()}

      {SAMPLE.map((item) => (
        <div key={Date.now()} className='section-promotion'>
          <div className='section-title'>{item.category}</div>

          <div className='list-promotion'>
            {item.promotion.map((promo) => (
              <PromotionItem data={promo} />
            ))}
          </div>
        </div>
      ))}

      <NavigationBar />
    </div>
  );
};

export default TierDetail;
