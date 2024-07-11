import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {cartQuantityDec, cartQuantityInc} from "../src/eCommerceSlice";
function AddToCart(){

   

    let StoredaddToCart=useSelector((state)=>state.ecomm.cartArray)
    console.log("Hello addToCart",StoredaddToCart);

//    let storedCartQuantity=useSelector((state)=>state.ecomm.cartQuantity)
//    console.log("Hello StoredQuantityCart", storedCartQuantity);

   let dispatch =useDispatch();


//    function addToCartPerformance(e){


//     const chechAddToCartItem = storedCartQuantity?.find((ele) => ele.id == e.id);

//     if(chechAddToCartItem){

//         dispatch(cartQuantityInc(e))

//         dispatch(cartQuantityDec(e))

//     }

//   }

   

    return(
        <>
        <div className="flex flex-row flex-wrap">
        {
            StoredaddToCart.map((e,i)=>{
                return (
                    
                    <div key={i} className="border-2 border-blue-200 w-[326px] h-[380px] mb-8 rounded-lg mt-5 shadow-xl mx-[26px]">
                        <h1 className="font-bold text-[18px] text-center mt-2">{e.title}</h1>
                        <img src={e.images} alt="img" className="w-72 hover:p-2" />
                        {/* <div>{e.description}</div> */}

                        <div className="flex flex-row justify-around">

                        <h1 className="font-semibold text-[17px]">Price: {e.price * e.quantity}</h1>
                         
                         <div className="flex flex-row ">
                         <button onClick={() => dispatch(cartQuantityDec({ id: e.id }))} className="h-7 w-10 border-2 border-black text-center">-</button>
                         <h1 className="h-7 w-10 border-2 border-black text-center">{e.quantity}</h1>
                         <button onClick={() => dispatch(cartQuantityInc({ id: e.id }))} className="h-7 w-10 border-2 border-black text-center" >+</button>
                         </div>

                        </div>
                       
                        
                    </div>
                   

                )
            })
        }
         </div>
        </>
    )
}
export default AddToCart