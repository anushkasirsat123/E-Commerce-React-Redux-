import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { increment,decrement } from "./counterSlice";

export function Counter1(){

    const count=useSelector((state)=>state.counter.value)
    const dispatch=useDispatch()

    return(
        <>
        <h1>{count}</h1>
        <button onClick={()=>dispatch(increment())}>INCREMENT</button>
        <button onClick={()=>dispatch(decrement())}>DECREMENT</button>
        </>
    )
}