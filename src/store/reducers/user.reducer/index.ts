import {createSlice} from '@reduxjs/toolkit';

const initialState: {user: any} = {
  user: {},
};

export const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.user =action.payload.user;
    },
    removeUser: (state, action) => {
        state.user ={}; 
    }
  },
});

export const {addUser, removeUser} = UserSlice.actions;
export default UserSlice.reducer;
