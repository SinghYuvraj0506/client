import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CartItem, CartSlice } from "../../lib/types";

const initialState: CartSlice = {
  cart: [],
  totalPrice: '0',
  cartIdMap:[]
};

const calculateTotal = (cart:CartItem[]) => {
  return cart.reduce((total, item) => total + item?.price * item?.quantity, 0).toFixed(2);
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<{ data: CartItem }>) => {
      const finalCart = [...state.cart, action.payload.data];
      state.cart = finalCart
      state.cartIdMap = finalCart?.map((e)=>e.id)
      state.totalPrice = calculateTotal(finalCart)
    },
    removeItemFromCart: (state, action: PayloadAction<{ id: string }>) => {
      const finalCart = state.cart.filter((e) => e.id !== action.payload.id);
      state.cart = finalCart;
      state.cartIdMap = finalCart?.map((e)=>e.id)
      state.totalPrice = calculateTotal(finalCart)
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
      state.cartIdMap = finalCart?.map((e)=>e.id)
      state.totalPrice = calculateTotal(finalCart)
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
      // @ts-ignore
      state.cartIdMap = finalCart?.map((e)=> e?.id)
       // @ts-ignore
       state.totalPrice = calculateTotal(finalCart)
    },
  },
});

export const { addItemToCart, removeItemFromCart, increseQty, decreseQty } = cartSlice.actions;
