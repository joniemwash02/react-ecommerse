import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;// The product to be added
      const itemIndex = state.products.findIndex(item => item.id === newItem.id);// Check if the product already exists in the cart
      if(itemIndex !== -1){
        state.products[itemIndex].quantity++;
        state.products[itemIndex].totalPrice += newItem.price;
      } else {
        state.products.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          image: newItem.image,
          quantity: 1,
          totalPrice: newItem.price
        });
      }
      state.totalPrice += newItem.price;
      state.totalQuantity++;
    },
  },
});
export const { addToCart } = CartSlice.actions;
export default CartSlice.reducer;
  