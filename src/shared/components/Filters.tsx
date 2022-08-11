import { FilterRender } from './FilterRender';

export function Filters() {
  const brands = ['gibson', 'fender', 'ibanez'];
  const colors = ['black', 'red', 'yellow'];
  return (
    <div className='filter'>
      <div className='filter-brands'>
        <h3 className='filter-brands__title'>Бренды</h3>
        {FilterRender(brands, 'brands')}
      </div>
      <div className='filter-color'>
        <h3 className='filter-color__title'>Цвет</h3>
        {FilterRender(colors, 'colors')}
      </div>
    </div>
  );
}
