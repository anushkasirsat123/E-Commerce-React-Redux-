import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filtredByBeauty, filtredByCaterogy,addToCart,descriptionBox,likebox,descriptionBoxPop,removeItemLikeBox } from "../src/eCommerceSlice";
import { useNavigate } from "react-router-dom";
// import image from '../images/heart.png'
function ECommerce() {
  let [ui, setUi] = useState([]);
  let [groceries1, setgroceries] = useState([]);
  let [changes,setchanges]=useState();

  

  let dispatch = useDispatch();
  let dispatch1 = useDispatch();
  let [flag,segtFlag] = useState(false)

  let Storedgroceries = useSelector((state) => state.ecomm.newArr);
  console.log("stored,...",Storedgroceries);
  let Storedbeauty = useSelector((state) => state.ecomm.filteredarray1);
  console.log(Storedbeauty);

  let navigate = useNavigate();

  let StoredaddToCart=useSelector((state)=>state.ecomm.cartArray)
  console.log(StoredaddToCart);

  let StoredDescription=useSelector((state)=>state.ecomm.descriptionArray)
  console.log(StoredDescription);

  let StoredLike=useSelector((state)=>state.ecomm.likeArray)
  console.log("storedLike",StoredLike);


  let data;
  async function fetchData() {
    let response = await fetch("https://dummyjson.com/products");
     data = await response.json();
    setUi(data.products);
    // setgroceries(data.products)

    console.log(ui);
  }

  useEffect(function () {
    fetchData();
  }, []);

  function groceriesUpdate(ui,categ) {
    segtFlag(true)
    dispatch(filtredByCaterogy({ui:ui,categ:categ}));
  
  }
  // function beautyUpdate(){

  //     dispatch1(filtredByBeauty({categoryName1:"Beauty",originalArr1:ui}))
  //     setUi(Storedbeauty)

  //     console.log("filter Storedbeauty",Storedbeauty);
  // }

  function addToCartHandler(e){
    // dispatch(addToCart(e))
    navigate('/addToCart')
  }

  function descriptionHandler(e){

    dispatch(descriptionBox(e))
    navigate('/description')

    
    // navigate('/description')
  //   if(StoredDescription==[]){
  //   dispatch(descriptionBox(e))
  //   navigate('/description')
  // }else{
  //   dispatch(descriptionBoxPop(e))
  //   navigate('/description')
  // }
  }


  function likeHandler(e){
    // setchanges(!changes);
    // console.log("LikeButton",changes);
    // dispatch(likebox(e))
    navigate("/likes")

  }

  // console.log("********************",changes);


  console.log("SSSSSSSSSSSSSSSSSSSSSSSS12345",StoredLike);

  
  function wishListHandler(e){

    console.log("SSSSSSSSSSSSSSSSSSSSSSSS",StoredLike);
    console.log("e.id",e.id);
    
  const chechItem = StoredLike?.find((ele) => ele.id == e.id);
  
  console.log("EEEEEEEEEEEE",chechItem);

  if(chechItem){
    console.log("LikeButton",changes);

    dispatch(removeItemLikeBox(e));
  }
  else{
    dispatch(likebox(e));
  }
    // console.log("1111111111111",changes);

    //  setchanges((prev)=>{return !prev});
    // setchanges(btnid)
    


    // setchanges((prev)=>!prev)
    // console.log("LikeButton",changes);
  }


  // function wishListHandlerSorted(e){

  //   console.log("EEEEEEEEEEEE",e);
  //   // console.log("1111111111111",changes);

  //   //  setchanges((prev)=>{return !prev});
  //   // setchanges(btnid)
    

  //   console.log("LikeButton",changes);
  //   dispatch(likeboxSorted(e))
  //   // setchanges((prev)=>!prev)
  //   // console.log("LikeButton",changes);
  // }

  

  return (
    <>
      <div>
        <div className="flex flex-row item-center justify-around  h-16 mt-4">
          <div>
            <h1 className="text-[23px] font-bold text-blue-800">E-Commerce</h1>
          </div>
          <div>
            <input
              type="text"
              placeholder="Search for Products,Brands and More"
              className="border-2 border-black w-[516px] h-10 text-center rounded-lg bg-blue-100 font-semibold border-none"
            />
          </div>
          <div>
            <ul className="flex flex-row ">
              <li className="font-semibold hover:text-blue-800 ">
                <button onClick={() => groceriesUpdate(ui,"groceries")}>
                  Groceries
                </button>
              </li>
              <li className="ml-8 font-semibold hover:text-blue-800">
                <button onClick={() => groceriesUpdate(ui,"beauty")}>
                  Beauty
                </button>
              </li>
              <li className="ml-8 font-semibold hover:text-blue-800">

              <button onClick={() => groceriesUpdate(ui,"fragrances")}>
                 Fragrances
                 </button>
              </li>
              <li className="ml-8 font-semibold hover:text-blue-800">
                <button onClick={() => groceriesUpdate(ui,"furniture")}>
                Furniture
                 </button>
              </li>
              <li className="ml-8 font-semibold hover:text-blue-800">


              <button onClick={() => groceriesUpdate(ui,"fragrances")}>
              Electronics
                 </button>
                
              </li>
              <li className="ml-8 font-semibold hover:text-blue-800">


              <button onClick={() => groceriesUpdate(ui,"furniture")}>
              Toys
                 </button>
                
                </li>
            </ul>
          </div>

          <div>
          <button className="w-20 h-10 border-2 border-black rounded-lg font-semibold bg-blue-100 border-none" onClick={()=> addToCartHandler()}>
                  Cart
                </button>
          </div>

          <div>
          <button className="w-20 h-10 border-2 border-black rounded-lg font-semibold bg-blue-100 border-none" onClick={()=> likeHandler()}>
                 Wishlist
                </button>
          </div>
{/* ----------------------------------------------------------------------------------- */}
          {/* <div>

          {
            StoredaddToCart.map((e)=>{
                return (
                    
                  
                  <button className="w-20 h-10 border-2 border-black rounded-lg font-semibold bg-blue-100 border-none" onClick={()=> addToCartHandler(e)}>
                  Cart
                </button>

                )
            })
        }  
          </div> */}

          {/* ----------------------------------------------------------------------------------------------------- */}
        </div>
        <div className="h-1 bg-blue-400"></div>
      </div>

      {/* ----------------------------------------------------------------------------------------------------------------------------------------- */}

      <div className="flex flex-row flex-wrap justify-around ">
        {flag ? Storedgroceries.map((e, i) => {
          return (
            <div
              key={i}
              className="border-2 border-blue-200 w-[326px] h-[380px] mb-8 rounded-lg mt-5 shadow-xl"
            >
              <h1 className="font-bold text-[18px] text-center mt-2">
                {e.title}
              </h1>
              <img src={e.images} alt="img" className="w-72 hover:p-2" />
              <div className="flex flex-row justify-evenly">
                {/* <h1 className="font-semibold text-[17px]">Price:{e.price}</h1> */}
                <span></span>
                <button className="w-28 border-2 border-blue-200 bg-blue-100 h-10 rounded-xl font-bold " onClick={()=> dispatch(addToCart(e))}>
                  Add to Cart
                </button>
                <button className="w-28 border-2 border-blue-200 bg-blue-100 h-10 rounded-xl font-bold "  onClick={()=> descriptionHandler(e)}>
                Description
                </button>
                {/* <button className={`${changes==false ?`bg-amber-400`: `bg-red-500`} h-[23px] w-[23px] mt-2`} onClick={()=> wishListHandler(e)}><i class="fa fa-heart-o">{changes}</i></button> */}
                {/* <button id={`${e.id}`}   className={`${StoredLike?.find((ele) => ele.id == e.id) ? `bg-amber-400`: ``} h-[20px] w-[20px] mt-2`} onClick={()=>wishListHandlerSorted(e)}><i class="fa fa-heart-o">{changes}</i></button> */}
                <button id={`${e.id}`}   className={`${StoredLike?.find((ele) => ele.id == e.id) ? `bg-red-500`: ``} h-[20px] w-[20px] mt-2`} onClick={()=> wishListHandler(e)}><i class="fa fa-heart-o"></i></button>
              </div>
            </div>  
          );
        }):
        (
            ui.map((e, i) => {
                return (
                  <div
                    key={i}
                    className="border-2 border-blue-200 w-[326px] h-[380px] mb-8 rounded-lg mt-5 shadow-xl"
                  >
                    <h1 className="font-bold text-[18px] text-center mt-2">
                      {e.title}
                    </h1>
                    <img src={e.images} alt="img" className="w-72 hover:p-2" />
                    <div className="flex flex-row justify-evenly">
                      {/* <h1 className="font-semibold text-[17px]">Price:{e.price}</h1> */}
                      <span></span>
                      <button className="w-28 border-2 border-blue-200 bg-blue-100 h-10 rounded-xl font-bold " onClick={()=> dispatch(addToCart(e))}>
                        Add to Cart
                      </button>
                      <button className="w-28 border-2 border-blue-200 bg-blue-100 h-10 rounded-xl font-bold " onClick={()=> descriptionHandler(e)}>
                        Description
                      </button>
                      <button   className={`${StoredLike?.find((ele) => ele.id == e.id) ? `bg-red-500`: ``} h-[20px] w-[20px] mt-2`} onClick={()=> wishListHandler(e)}><i class="fa fa-heart-o">{changes}</i></button>
                      {/* {console.log("bbbbbbbbbbbbbbbbbbbbb222222",i)} */}
                    </div>
                  </div>
                );
              })
        )
        }
      </div>

      {/* --------------------------------------------------------------------------------------------------------------------------------------------- */}
    </>
  );
}
export default ECommerce;
