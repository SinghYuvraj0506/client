import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CartItem, CartSlice } from "../../lib/types";

const initialState: CartSlice = {
  cart: [],
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<{ data: CartItem }>) => {
      state.cart = [...state.cart, action.payload.data];
    },
    removeItemFromCart: (state, action: PayloadAction<{ id: string }>) => {
      const finalCart = state.cart.filter((e) => e.id !== action.payload.id);
      state.cart = finalCart;
    },
    increseQty: (state, action: PayloadAction<{ id: string }>) => {
      const { id } = action.payload;
      const finalCart = state.cart.map((e) => {
        if (e?.id === id) {
          e.quantity += 1;
        }
        return e;
      });
      state.cart = finalCart;
    },
    decreseQty: (state, action: PayloadAction<{ id: string }>) => {
      const { id } = action.payload;
      const finalCart = state.cart.map((e) => {
        if (e?.id === id) {
          e.quantity -= 1;
        }

        if (e?.quantity > 0) {
          return e;
        }
        
        return false;
      })?.filter(Boolean)

      // @ts-ignore
      state.cart = finalCart;
    },
  },
});

export const { addItemToCart, removeItemFromCart, increseQty, decreseQty } = cartSlice.actions;
