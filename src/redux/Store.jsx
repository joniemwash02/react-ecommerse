// src/redux/Store.jsx
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice";
import productReducer from "./ProductSlice";

// --- Load from localStorage ---
const loadState = () => {
  try {
    const savedState = localStorage.getItem("appState");
    return savedState ? JSON.parse(savedState) : undefined;
  } catch (error) {
    console.error("Error loading state:", error);
    return undefined;
  }
};

// --- Save to localStorage ---
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify({
      cart: state.cart,
      products: state.products,
    });
    localStorage.setItem("appState", serializedState);
  } catch (error) {
    console.error("Error saving state:", error);
  }
};

// --- Configure Store ---
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productReducer,
  },
  preloadedState: loadState(),
});

// --- Persist Store Changes ---
store.subscribe(() => {
  saveState(store.getState());
});
