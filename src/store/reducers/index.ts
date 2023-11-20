import {combineReducers} from '@reduxjs/toolkit';
import userReducer from './user.reducer';

export const appReducer = combineReducers({
  userState: userReducer
});
