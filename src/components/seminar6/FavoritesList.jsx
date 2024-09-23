import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFavorite } from './favoritesSlice';

const FavoritesList = () => {
  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  return (
    <ul>
      {favorites.map(item => (
        <li key={item.id}>
          {item.name}
          <button onClick={() => dispatch(removeFavorite(item.id))}>Удалить из избранного</button>
        </li>
      ))}
    </ul>
  );
};

export default FavoritesList;
