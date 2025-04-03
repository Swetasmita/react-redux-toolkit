//Create a Redux store
import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const store = configureStore({
    //object has key value-pair
    reducer : {
        cart: cartSlice.reducer
    }
})

export default store;