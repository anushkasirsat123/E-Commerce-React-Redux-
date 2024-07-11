import React from "react";
import { useSelector } from "react-redux";
function LikePage(){

    let StoredLike=useSelector((state)=>state.ecomm.likeArray)
  console.log("Hello WishList",StoredLike);

 

    return(

        <>

<div className="flex flex-row flex-wrap" >
        {
            StoredLike.map((e,i)=>{
                return (
                    
                    <div key={i} className="border-2 border-blue-200 w-[326px] h-[380px] mb-8 rounded-lg mt-5 shadow-xl mx-[26px]">
                        <h1 className="font-bold text-[18px] text-center mt-2">{e.title}</h1>
                        <div className="flex justify-center item-center"><img src={e.images} alt="img" className="w-[180px] hover:p-2" /></div>
                        <div className="text-[15px]"><span className="font-semibold ">Description:</span>{e.description}</div>
                        <h1 className="font-semibold text-[17px]">Price:{e.price}</h1>
                    </div>
                   

                )
            })
        }
         </div>
        </>
    )
}
export default LikePage;