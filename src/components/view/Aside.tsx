import React from "react";

export function Aside() {

  return (
      <aside className="aside">
        <form className="search-form">
        <input type="search" placeholder="SEARCH" autoFocus id="search"/>
          <button type="submit" className="button-form" id="search__button">Найти</button> 
        </form>
        <div className="filter">
          <div className="filter-brands">
            <h3 className="filter-brands__title">Бренды</h3>
            <div className="filter-brands__box">
              <div className="check">
                <label>
                  <input type="checkbox" value="gibson" name="brands"/>
                  GIBSON
                </label>
              </div>
              <div className="check">
                <label>
                  <input type="checkbox" value="fender" name="brands" />
                  FENDER
                </label>
              </div>
              <div className="check">
                <label>
                  <input type="checkbox" value="ibanez" name="brands" />
                  IBANEZ
                </label>
              </div>
            </div>
          </div>
          <div className="filter-color">
            <h3 className="filter-color__title">Цвет</h3>
            <div className="filter-color__box">
              <div className="check">
                <label>
                  <input type="checkbox" value="black" name="brands"/>
                    BLACK
                </label>
              </div>
              <div className="check">
                <label>
                <input type="checkbox" value="red" name="brands"/>
                  RED
                </label>
              </div>
              <div className="check">
                <label>
                  <input type="checkbox" value="yellow" name="brands"/>
                  YELLOW
                </label>
              </div>
            </div>
          </div>
        </div>
        <button id="reset" className="button-form">Reset storage</button>
      </aside>
    
  );
}
