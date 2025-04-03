import { createSlice } from "@reduxjs/toolkit";

//we are calling createSlice method and provide an object with arguments
const cartSlice = createSlice({
    name: 'cart',
    initialState:{
        cartProductIds: []
    },
    //create addToCart action to add an item in cart state
    reducers:{
        addToCart: (state, action) => {
           state.cartProductIds = [action.payload, ...state.cartProductIds]
        },
        //create removeCart action to remove an item
        removeFromCart: (state, action) =>{
            const indexOfId = state.cartProductIds.indexOf(action.payload);
            state.cartProductIds.splice(indexOfId, 1)
        },
        //create clearAllItems action to clear all items
        //when we dispatch the clearall items action, 
        //All the productIds in our cart state will be cleared.
        clearAllItems: (state) => {
            state.cartProductIds = []
        }
    }
})

export default cartSlice