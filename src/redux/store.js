import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice';
import blogReducer from './blogSlice';
import lawyerReducer from './lawyerSlice';

const store = configureStore({
    reducer: {
        cart: cartReducer,
        blog: blogReducer,
        lawyer: lawyerReducer
    }
});

export default store;