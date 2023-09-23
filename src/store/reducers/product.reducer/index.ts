import {createSlice, nanoid} from '@reduxjs/toolkit';

const initialState: {products: {id: string; text: string}[]} = {
  products: [],
};

export const ProductSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const product = {
        id: nanoid(),
        text: action.payload,
      };
      state.products.push(product);
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter(
        product => product.id !== action.payload,
      );
    },
  },
});

export const {addProduct, removeProduct} = ProductSlice.actions;
export default ProductSlice.reducer;
