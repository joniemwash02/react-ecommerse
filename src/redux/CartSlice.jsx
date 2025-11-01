import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.products.find((item) => item.id === newItem.id);

      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      } else {
        state.products.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          image: newItem.image,
          description: newItem.description,
          quantity: 1,
          totalPrice: newItem.price,
        });
      }

      state.totalPrice += newItem.price;
      state.totalQuantity++;
    },

    removeFromCart: (state, action) => {
      const id = action.payload;
      const foundItem = state.products.find((item) => item.id === id);

      if (foundItem) {
        state.totalPrice -= foundItem.totalPrice;
        state.totalQuantity -= foundItem.quantity;
        state.products = state.products.filter((item) => item.id !== id);
      }
    },

    increaseQuantity: (state, action) => {
      const id = action.payload;
      const foundItem = state.products.find((item) => item.id === id);

      if (foundItem) {
        foundItem.quantity++;
        foundItem.totalPrice += foundItem.price;
        state.totalQuantity++;
        state.totalPrice += foundItem.price;
      }
    },

    decreaseQuantity: (state, action) => {
      const id = action.payload;
      const foundItem = state.products.find((item) => item.id === id);

      if (foundItem && foundItem.quantity > 1) {
        foundItem.quantity--;
        foundItem.totalPrice -= foundItem.price;
        state.totalQuantity--;
        state.totalPrice -= foundItem.price;
      }
    },

    clearCart: (state) => {
      state.products = [];
      state.totalPrice = 0;
      state.totalQuantity = 0;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = CartSlice.actions;

export default CartSlice.reducer;
