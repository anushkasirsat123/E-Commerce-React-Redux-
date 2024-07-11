import { createSlice } from "@reduxjs/toolkit";
import { decrement, increment } from "./counterSlice";

let initialState={
    value:0,
}

export const SliceCounter=createSlice({
name:"counter",
initialState,
reducers:{
    increment:(state,action)=>{
        state.value=state.value+1;
        console.log(state.value);
    },

    decrement:(state,action)=>{
        state.value=state.value-1;
        console.log(state.value);
    }

}


})
export const{increment,decrement}=SliceCounter.actions

export default SliceCounter.reducer