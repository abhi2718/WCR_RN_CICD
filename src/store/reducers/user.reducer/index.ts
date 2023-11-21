import {createSlice} from '@reduxjs/toolkit';
import { storeDataInAsynStorage } from '../../../utils/asyncStorage';

const initialState: {user: any} = {
  user: {},
};

export const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, { payload }) => {
      const { user } = payload;
      state.user = user;
      if (user?.token) {
        storeDataInAsynStorage('token', user.token);
      }
      storeDataInAsynStorage("profile",user);
    },
    removeUser: (state, action) => {
        state.user ={}; 
    }
  },
});

export const {addUser, removeUser} = UserSlice.actions;
export default UserSlice.reducer;
