import React from 'react';
import { useDispatch } from 'react-redux';
import { addFavorite } from './favoritesSlice';

const products = [
  { id: 1, name: 'Товар 1', description: 'Описание товара 1', price: 100 },
  { id: 2, name: 'Товар 2', description: 'Описание товара 2', price: 200 },
];

const ProductList = () => {
  const dispatch = useDispatch();

  return (
    <ul>
      {products.map(product => (
        <li key={product.id}>
          {product.name} - {product.price}$
          <button onClick={() => dispatch(addFavorite(product))}>Добавить в избранное</button>
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
