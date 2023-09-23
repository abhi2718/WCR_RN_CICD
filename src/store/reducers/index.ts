import {combineReducers} from '@reduxjs/toolkit';
import todoReducer from './todo.reducer';
import productReducer from './product.reducer';

export const appReducer = combineReducers({
  todoState: todoReducer,
  productState: productReducer,
});
