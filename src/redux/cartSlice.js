import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartData : [
      
    ]

}

const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:  {
        addToCart: (state, action) => {
            const existingItem = state.cartData.find(item => item.id === action.payload.id);
            if(existingItem) {
                existingItem.quantity += 1;
            }
            else{
                state.cartData.push({...action.payload, quantity: 1});
            }
        },
        removeFromCart: (state,action) => {
            state.cartData=state.cartData.filter((item) => (item.id !== action.payload))
        },

        increaseItem: (state, action) => {
            const existingItem = state.cartData.find(item => item.id === action.payload);
                existingItem.quantity += 1;
        },
        decreaseItem: (state, action) => {
            const existingItem = state.cartData.find(item => item.id === action.payload);
                existingItem.quantity -= 1;
        },

        clearCart: (state) => {
            return [];
        },
    },
});

export const { addToCart, removeFromCart, clearCart, increaseItem, decreaseItem} = cartSlice.actions;
export default cartSlice.reducer;