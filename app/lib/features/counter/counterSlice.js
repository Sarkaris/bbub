import { createSlice } from '@reduxjs/toolkit'

const ISSERVER = typeof window === "undefined";
let initialCart
if(!ISSERVER) {
    initialCart = JSON.parse(localStorage.getItem('cart')) || [];
}

let initialState = {
  cart:initialCart,
}
export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addToCart: (state,action) => {
      // if(cart.f)
      const isPresent = state.cart.find((item)=>{
        return item.id === action.payload.id
      })
      if(isPresent){
        state.cart = state.cart.filter((item)=>{
          return item.id === action.payload.id?{...item,quantity:item.quantity++}:item; 
          // return s =>s.id === action.payload.id ? { ...item, quantity: item.quantity++} : item
        })
        console.log(state.cart);
      }else{
        state.cart.push({...action.payload,quantity:1})
      }
      localStorage.setItem('cart', JSON.stringify(state.cart));
      
    },
    deleteFromCart: (state,action) => {
      // if(cart.f)
      state.cart = state.cart.filter((item)=>{
        return item.id!==action.payload
      })
      // initialState.cart = newArray
      // console.log(newArray);
      // state.cart = newArray
      localStorage.setItem('cart', JSON.stringify(state.cart));
      
    },
    incerment: (state,action) => {
      state.cart = state.cart.filter((item)=>{
        return item.id === action.payload.id?{...item,quantity:item.quantity++}:item; 
      })
    },
    decerment: (state,action) => {
      state.cart = state.cart.filter((item)=>{
        return item.id === action.payload.id?{...item,quantity:item.quantity--}:item; 
      })
    }
  },
})

// Action creators are generated for each case reducer function
export const { addToCart,deleteFromCart,incerment,decerment } = counterSlice.actions

export default counterSlice.reducer