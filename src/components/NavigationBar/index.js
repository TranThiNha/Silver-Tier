import React from 'react';

const MENU = ['home', 'alert', 'feed', 'user'];

const NavigationBar = (props) => {
  const { data } = props;

  return (
    <div className='navigation-bar' key={Date.now()}>
      {MENU.map((item) => (
        <div className='bounder-item'>
          <img
            src={require(`assets/media/${item}.svg`)}
            className='card-img-top'
            alt='...'
          />

          {item === 'alert' && <div className='dots' />}
        </div>
      ))}
    </div>
  );
};

export default NavigationBar;
