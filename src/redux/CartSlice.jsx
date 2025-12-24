import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    addItem(state, action) {
      const item = state.items.find(i => i.id === action.payload.id);
      if (!item) {
        state.items.push({ ...action.payload, quantity: 1 });
        state.totalQuantity++;
      }
    },
    removeItem(state, action) {
      const item = state.items.find(i => i.id === action.payload);
      if (item) {
        state.totalQuantity -= item.quantity;
        state.items = state.items.filter(i => i.id !== action.payload);
      }
    },
    updateQuantity(state, action) {
      const { id, type } = action.payload;
      const item = state.items.find(i => i.id === id);
      if (item) {
        if (type === "increase") {
          item.quantity++;
          state.totalQuantity++;
        } else if (type === "decrease" && item.quantity > 1) {
          item.quantity--;
          state.totalQuantity--;
        }
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
