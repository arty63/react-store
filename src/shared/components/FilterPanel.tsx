import React from 'react';
import { Filters } from './Filters';
export function FilterPanel() {
  return (
    <div className='filter-panel'>
      <div className='search-form'>
        <input type='search' placeholder='SEARCH' autoFocus id='search' />
        <button type='submit' className='button-form' id='search__button'>
          Найти
        </button>
      </div>
      <Filters />
      <button id='reset' className='button-form'>
        Reset storage
      </button>
    </div>
  );
}
