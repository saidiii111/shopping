import {combineReducers} from 'redux';


const productsReducer = (products = {}, action) => {
  const {id} = action.product || {};
  let inventory ;
  switch(action.type){
    case'ADD_TO_CART':
    inventory= products[id].inventory
     return {
       ...products,
       [id]:{
         ...products[id],
         inventory:inventory <= 0 ? inventory: inventory - 1
       }
}
    default:
     return products
   }

};
const cartReducer = (cart = {}, action) => {

  const {product} = action;
  const {id} = product || {}
  const cartItem = cart[id] || {
    ...product,
    quantity:0

  }
  switch(action.type){
    case'ADD_TO_CART':
     return {
       ...cart,
       [id]:{
         ...cartItem,
         quantity:cartItem.quantity + 1
       }
     }
    default:
     return cart
  }
};

export const appReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer
})
