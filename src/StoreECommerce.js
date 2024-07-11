import { configureStore } from "@reduxjs/toolkit";
import ecommReducer from '../src/eCommerceSlice'
export const store=configureStore({
    reducer:{
        ecomm : ecommReducer
    },
})