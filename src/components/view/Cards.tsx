import { Products } from "./products";

interface CardProps {
  product: Products
}

export function Card({product}:CardProps) {

  return (

          <div className="card" data-guitar={product.id} data-color={product.color}>
            <img className="card__img" src={product.img} alt="gibson"/>
            <h3 className="card__title">{product.brand}</h3>
            <h4 className="card__subtitle">{product.model}</h4>
            <p className="card__year">{product.year}</p>
            <p className="card__price">{product.price}</p>
            <a className="button card__button" data-id={product.id}>Добавить в корзину</a>
          </div>
        
  );
}
