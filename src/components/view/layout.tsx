import React from "react";
import { Aside } from "./Aside";
import { Card } from "./Cards";
import { guitars } from "./products";

export function Header() {

  return (
    <header className="header">
      <div className="header__container container">
        <div className="header__logo-box">
          <h1 className="header__logo-box__title">Guitar Store</h1>
          <p className="header__logo-box__description">The best store of guitars</p>
        </div>
        <div className="header__basket-box">
          <a className="header__basket-box__basket" onClick={(event)=>event.preventDefault()}>
            Корзина
          </a>
          <p className="header__basket-box__goods">0</p>
        </div>
      </div>
    </header>
  );
}


export function Main() {

  return (
  <main className="main">
    <div className="container main__container">
      <Aside/>    
      <div className="main__products">
        <h2 className="main__title">Каталог товаров</h2>
        <div className="main__products__box">
          {guitars.map(elm=><Card product={elm}/>)} 
        </div>
      </div>
    </div>
  </main>
  );
}

export function Footer() {

  return (
    <footer className="footer">
        <div className="container footer__container">
          <a className="footer__git" href="https://github.com/arty63">
            <img src="https://cdn.icon-icons.com/icons2/509/PNG/512/Github_icon-icons.com_49946.png" alt="git"/>
          </a>
          <p className="footer__year">© Rolling Scopes School, 2022</p>
          <a className="footer__logo" href="https://rs.school/js/">
            <img src="https://rs.school/images/rs_school_js.svg" alt="rss"/>
          </a>
        </div>
      </footer>
  )
}

