import { createSlice } from "@reduxjs/toolkit";
import { getLocalStorage, saveToLocalStorage } from "../../utils/localStorage";
import { ProductInterface } from "../../interfaces/products";

export const CartSlice = createSlice({
   name: "product",
   initialState: {
      cart: getLocalStorage("products"),
      isOpen: false,
      totalPrice: 0,
      totalProduct: 0,
   },
   reducers: {
      addToCart: (state, { payload }) => {
         const isAlreadyInCart = state.cart.find(
            (product: ProductInterface) => product.id === payload.id
         );

         if (isAlreadyInCart) {
            const index = state.cart.findIndex(
               (product: ProductInterface) => product?.id === payload.id
            );

            state.cart[index].quantity += 1;
            saveToLocalStorage(state.cart);
            return;
         } else {
            saveToLocalStorage(state.cart, { ...payload, quantity: 1 });

            state.cart = getLocalStorage("products");
         }
      },
      removeToCart: (state, { payload }) => {
         const productExist = state.cart.find(
            (product: ProductInterface) => product.id === payload.id
         );

         if (productExist) {
            const index = state.cart.findIndex(
               (product: ProductInterface) => product.id === payload.id
            );

            if (state.cart[index].quantity > 0) {
               state.cart[index].quantity -= 1;

               if (state.cart[index].quantity === 0) {
                  state.cart = state.cart.filter(
                     (product: ProductInterface) => product.id !== payload.id
                  );
               }

               saveToLocalStorage(state.cart);
            }
         }
      },
      calculateTotalPrice: (state) => {
         state.totalPrice = state.cart.reduce(
            (acc: number, curr: ProductInterface) => {
               return acc + curr.quantity * curr.price;
            },
            0
         );
      },
      calculatTotalproduct: (state) => {
         state.totalProduct = state.cart.reduce(
            (acc: number, curr: ProductInterface) => {
               return acc + curr.quantity;
            },
            0
         );
      },
      toggleCart: (state) => {
         state.isOpen = !state.isOpen;
      },
   },
});

export const {
   addToCart,
   removeToCart,
   toggleCart,
   calculateTotalPrice,
   calculatTotalproduct,
} = CartSlice.actions;

export default CartSlice.reducer;
