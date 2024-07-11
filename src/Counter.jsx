import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { increment,decrement,twice } from "./counterSlice";
function Counter(){
    let dispatch=useDispatch();
    let count=useSelector((state)=>state.counter.value)

    return(

        <>
    <h1>{count}</h1>
    <button onClick={()=>dispatch(increment())}>INCREMENT</button>
    <button onClick={()=>dispatch(decrement())}>DECREMENT</button>
    <button onClick={()=>dispatch(twice())}>MULTIPLE</button>

        </>
    )
}
export default Counter;