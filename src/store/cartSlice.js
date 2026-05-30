import {createSlice} from '@reduxjs/toolkit'

let cartSlice=createSlice({
    name:"cart",
    initialState:{
        cart:[],
        totalPrice:0
    },
    reducers:{
        addItem:function(state,action){
            let exists = state.cart.find(item => item.id === action.payload.id)
            if(!exists) {
                state.cart.push(action.payload)
                state.totalPrice +=action.payload.price;

            } else {
                alert("Item already in cart!")
            }
        }
    }
});

let {addItem} = cartSlice.actions;

export {addItem}
export default cartSlice;
