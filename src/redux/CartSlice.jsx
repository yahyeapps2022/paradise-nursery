import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: []
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;
      const existing = state.cartItems.find(i => i.id === item.id);
      if (existing) {
        existing.quantity += item.quantity || 1;
      } else {
        state.cartItems.push({ ...item, quantity: item.quantity || 1 });
      }
    },
    removeItem: (state, action) => {
      const id = action.payload;
      state.cartItems = state.cartItems.filter(i => i.id !== id);
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.cartItems.find(i => i.id === id);
      if (item) item.quantity = quantity > 0 ? quantity : 1;
    }
  }
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export const selectTotalQuantity = (state) =>
  state.cart.cartItems.reduce((total, item) => total + item.quantity, 0);

export default CartSlice.reducer;
