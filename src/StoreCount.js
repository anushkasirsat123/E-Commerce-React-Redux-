import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../src/SliceCounter';


export const store=configureStore({
    reducer:{
        counter:counterReducer,
    },


})