import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  value1: "",
  value2: "",
};

export const SlicePass = createSlice({
  name: "Pass",
  initialState,
  reducers: {
    generatePassWord: (state, action) => {
    //   console.log("Abc");
    //   console.log(action.payload);

      let uniquechar = "";
      let uniquenum = "";

      let randomchar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      let midchar = "abcdefghijklmnopqrstuvwxyz";
      let spechar = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~;";
      let num = "0123456789";

      for (let i = 1; i <= 5; i++) {
        uniquechar += midchar.charAt(Math.random() * midchar.length);
      }

      for (let i = 1; i <= 2; i++) {
        uniquenum += num.charAt(Math.random() * num.length);
      }

      let password =
        randomchar.charAt(Math.random() * randomchar.length) +
        uniquechar +
        spechar.charAt(Math.random() * spechar.length) +
        uniquenum;

      state.value1 = password;
    //   console.log("Password", password);
    },


    updateValue2:(state,action)=>{
        state.value2=action.payload
    },

    match: (state, action) => {
      if (state.value2 == state.value1) {
        alert("successful");
      } else {
        alert("please enter correct password");
      }
    },
  },
});

export const { generatePassWord,match,updateValue2 } = SlicePass.actions;
export default SlicePass.reducer;
