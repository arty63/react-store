import { FilterPanel } from '../shared/components/FilterPanel';
import { Card } from '../shared/components/Card';
import { guitars } from '../shared/products';

export function Main() {
  return (
    <main className='main'>
      <div className='container main__container'>
        <FilterPanel />
        <div className='main__products'>
          <h2 className='main__title'>Каталог товаров</h2>
          <div className='main__products__box'>
            {guitars.map((elm) => (
              <Card product={elm} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
