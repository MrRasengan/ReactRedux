import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice';
import favoritesReducer from './favoritesSlice';
import productReducer from './productSlice';

const store = configureStore({
  reducer: {
    todos: todoReducer,
    favorites: favoritesReducer,
    products: productReducer,
  },
});

export default store;
