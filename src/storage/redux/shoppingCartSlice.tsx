import { createSlice } from "@reduxjs/toolkit";
import { shoppingCartModel } from "../../interfaces/shoppingCartModel";

const initialState: shoppingCartModel = {
  cartItems: [],
};

export const shoppingCartSlice = createSlice({
  name: "ShoppingCart",
  initialState: initialState,
  reducers: {
    setShoppingCart: (state, action) => {
      state.cartItems = action.payload;
    },
    updateShoppingCart: (state, action) => {
      state.cartItems = state.cartItems?.map((item, index) => {
        if (item.id === action.payload.cartItem.id) {
          item.quantity = item.quantity + action.payload.quantity;
        }
        return item;
      });
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems?.filter((item) => {
        if (item === action.payload.cartItem.id) {
          return null;
        }
        return item;
      });
    },
  },
});

export const { setShoppingCart } = shoppingCartSlice.actions;
export const shoppingCartReducer = shoppingCartSlice.reducer;
