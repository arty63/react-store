import React from 'react';

export function Header() {
  return (
    <header className='header'>
      <div className='header__container container'>
        <div className='header__logo-box'>
          <h1 className='header__logo-box__title'>Guitar Store</h1>
          <p className='header__logo-box__description'>
            The best store of guitars
          </p>
        </div>
        <div className='header__basket-box'>
          <p className='header__basket-box__basket'>Корзина</p>
          <p className='header__basket-box__goods'>0</p>
        </div>
      </div>
    </header>
  );
}
