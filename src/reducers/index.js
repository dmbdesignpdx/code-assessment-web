import { combineReducers } from 'redux'

import cart, * as fromCart from './cart'
import products, * as fromProducts from './products'


// Lists the added IDs (value)
const getAddedIds = state => fromCart.getAddedIds(state.cart)


// Produces the quantity of the product (value)
const getQuantity = (state, id) => fromCart.getQuantity(state.cart, id)


// Gets product object by ID (value)
const getProduct = (state, id) => fromProducts.getProduct(state.products, id)


// Finds the total price in the cart
export const getTotal = state =>
  getAddedIds(state)
    .reduce((total, id) =>
      total + getProduct(state, id).price * getQuantity(state, id),
      0
    )
    .toFixed(2)


// Creats list of products and their info
export const getCartProducts = state =>
  getAddedIds(state).map(id => ({
    ...getProduct(state, id),
    quantity: getQuantity(state, id)
  }))


export default combineReducers({
  cart,
  products
})
