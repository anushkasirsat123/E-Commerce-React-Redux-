import { createSlice } from "@reduxjs/toolkit";

const initialState={
    filteredarray:[],
    // filteredarray1:[],
    newArr:[],


    cartArray:[],
    descriptionArray:[],
    likeArray:[],
    // cartQuantity:[1],


    // emptyCartContainer:[]

    // likeArraySorted:[]
    
}


export const eCommerceSlice=createSlice({
name:'eCommerce',
initialState,
reducers:{
     filtredByCaterogy:(state,action)=>{
        state.newArr = action.payload
        console.log("action....",action.payload)
        console.log("newarr...",state.newArr.ui)
    
    // console.log("slice log filter",state.newArr);
       
            state.newArr =  state.newArr.ui.filter((e)=>{
                return e.category==action.payload.categ
            })
    console.log("slice log filter",state.newArr);
        
    //    console.log("category",action.payload.categoryName);
    //    console.log("arr",action.payload.originalArr)

    },

    // filtredByBeauty:(state,action)=>{


    //     state.filteredarray1=action.payload.originalArr1.filter(function(currEle){
    //         if(currEle.category=="beauty"){
    //             return currEle
    //         }
           
    //     })
    //     console.log(state.filteredarray1);

    //     console.log("category",action.payload.categoryName1);
    //    console.log("arr",action.payload.originalArr1)
    // }

// --------------------------------------------------------------------------------------------
    // addToCart(state,action){
    //     // console.log(action.payload.title);

    //     state.cartArray.push(action.payload);
    //     console.log();
        
    
        
    // },


// --------------------------------------------------------------------------------------------------------

    descriptionBox(state,action){
        state.descriptionArray.push(action.payload);
        console.log("abc1223");
        console.log(state.descriptionArray);

        if(state.descriptionArray.length>1){
            console.log("xyz");
            state.descriptionArray.shift();
        }
        
        // if(state.descriptionArray.length==2){
        //     state.descriptionArray.push(action.payload);
        //     console.log("abc");

        // }
        // else{
        //     console.log("abc8956");
        //     state.descriptionArray.pop();

        // }
        // state.descriptionArray.slice(0,0,"abc")
        // state.descriptionArray.pop(action.payload);

        // console.log("descriptionArray",descriptionArray);
    },
    // descriptionBoxPop(state,action){
    //     // state.descriptionArray.push(action.payload);
    //     // state.descriptionArray.slice(0,0,"abc")
    //     state.descriptionArray.pop(action.payload);

    //     console.log();
    // },

    likebox(state,action){
        console.log("esdftyhghuh");
        // state.likeArray.push(action.payload);
        state.likeArray = [ ...state.likeArray , action.payload];
        

        


    },

    removeItemLikeBox(state,action){

const itemIndex = state.likeArray?.findIndex((ele) => ele.id == action.payload.id)
console.log("item",itemIndex)
if(itemIndex >= 0){
    state.likeArray.splice(itemIndex,1)
}
// else if(itemIndex == 0 && state.likeArray.length == 1){
//     state.likeArray = []
// }

console.log("ac",state.likeArray)


    },

    // likeboxSorted(state,action){
    //     console.log("esdftyhghuh");
    //     // state.likeArray.push(action.payload);
    //     state.likeArraySorted = [ ...state.likeArraySorted , action.payload];
        

        


    // }

    // ---------------------------------------------------------------------------------------------------------------
    // cartQuantityInc(state,action){
    //     console.log("AAAAABBBBCCCCC");

    //     state.cartQuantity=state.cartQuantity+1;
    // },
    // cartQuantityDec(state,action){

    //     console.log("AAAAABBBBCCCCC1234");
    //     state.cartQuantity=state.cartQuantity-1;
    // },

    // ---------------------------------------------------------------------------------------------------------------------

    // emptyStoredCart(state,action){

    //     state.emptyCartContainer.push(cartArray[action.payload])
    //     console.log("emptyCartContainer",emptyCartContainer);
    // }

    addToCart(state, action) {
        const itemIndex = state.cartArray.findIndex((item) => item.id === action.payload.id);
        
        console.log("ADDTOCRTINDEX",itemIndex);
        // if (itemIndex >= 0) {
        //     state.cartArray[itemIndex].quantity += 1;
        // } else {
        //     state.cartArray.push({ ...action.payload, quantity: 1 });
        // }

        

        state.cartArray.push({ ...action.payload, quantity: 1 });
        if(itemIndex >= 0){
            console.log("ADDTOCRTINDEX",itemIndex);
            state.cartArray.splice(itemIndex,1)
        }


        

        // state.cartArray = [ ...state.cartArray , action.payload];
        
        // console.log("Iddddddddddddddd",state.item.id);

        // if(state.cartArray[itemIndex].quantity > 1){
        //     state.cartArray.shift();
        // }
        
    },
    cartQuantityInc(state, action) {
        const itemIndex = state.cartArray.findIndex((item) => item.id === action.payload.id);
        if (itemIndex >= 0) {
            state.cartArray[itemIndex].quantity += 1;
        }
    },
    cartQuantityDec(state, action) {
        const itemIndex = state.cartArray.findIndex((item) => item.id === action.payload.id);
        if (itemIndex >= 0 && state.cartArray[itemIndex].quantity > 1) {
            state.cartArray[itemIndex].quantity -= 1;
        }
    },




}



})

export const { filtredByCaterogy,filtredByBeauty,addToCart,descriptionBox,likebox,descriptionBoxPop,removeItemLikeBox,cartQuantityInc,cartQuantityDec} = eCommerceSlice.actions
export default eCommerceSlice.reducer