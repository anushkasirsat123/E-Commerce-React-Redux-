import { createSlice } from "@reduxjs/toolkit";
// import {increment } from "../../redux-proj/src/counterSlice";

let initialState={
    value: 0,
}

export const counterSlice=createSlice({

    name:"counter",
    initialState,
    reducers:{
        increment:(state,action)=>{
            state.value=state.value+1;
            console.log(state.value)


        },
        decrement:(state,action)=>{
            state.value=state.value-1;
            console.log(state.value);

        },
        twice:(state,action)=>{
            state.value=state.value*2;
            console.log(state.value);
        }

    }
});
export const {increment,decrement,twice}=counterSlice.actions
export default counterSlice.reducer