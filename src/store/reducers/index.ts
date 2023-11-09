import {combineReducers} from '@reduxjs/toolkit';
import todoReducer from './todo.reducer';
import productReducer from './product.reducer';
import userReducer from './user.reducer';

export const appReducer = combineReducers({
  todoState: todoReducer,
  productState: productReducer,
  userState: userReducer
});
