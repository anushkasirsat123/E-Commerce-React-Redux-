import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { generatePassWord,match,updateValue2 } from "./SlicePass";
export function PassGenerator(){
    const count1=useSelector((state)=>state.counter.value1)
    const count2=useSelector((state)=>state.counter.value2)
    const dispatch=useDispatch()
    console.log(count1);
    console.log(count2);

    let handleInputChange = (event) => {
        dispatch(updateValue2(event.target.value));
      }; 

    return(
        <>
        <h3>{count1}</h3>
        <button onClick={()=>dispatch(generatePassWord())}>Generate</button>
        <input type="text" placeholder="Enter the Password"  className="border-solid border-2 ml-5" value={count2} onChange={handleInputChange} />
        <button className="ml-5" onClick={()=>dispatch(match())}>Submit</button>
        </>
    )
}
