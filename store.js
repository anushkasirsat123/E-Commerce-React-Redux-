import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../REDUX_PRACT/src/counterSlice'
export const store=configureStore({
    reducer:{
        counter:counterReducer
    },
    
})