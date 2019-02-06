import { combineReducers } from 'redux'

import {
  RECEIVE_PRODUCTS,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
} from '../constants/ActionTypes'


// Decreases number of products in inventory
const products = (state, action) => {
  
  switch (action.type) {
    case ADD_TO_CART:
    case INCREASE_QUANTITY:
      return {
        ...state,
        inventory: state.inventory - 1
      }
    case DECREASE_QUANTITY: {
      return {
        ...state,
        inventory: state.inventory + 1
      }
    }
    case REMOVE_FROM_CART:
      return {
        ...state,
        inventory: state.inventory + action.quantity
      }
    default:
      return state
  }
}


// Object of product objects by ID
const byId = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return {
        ...state,
        ...action.products.reduce((obj, product) => {
          obj[product.id] = product
          return obj
        }, {})
      }
    default:
      const { productId } = action
      if (productId) {
        return {
          ...state,
          [productId]: products(state[productId], action)
        }
      }
      return state
  }
}


// Keeps track of visible products by ID
const visibleIds = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return action.products.map(product => product.id)
    default:
      return state
  }
}


/**
 *  Sets a currency type
 * 
 *  There would be some magic to take a user's preffered currency type
 *  and convert the given product's ammount to the appropriate amount. 
 *  We can't just use the API's currency value for the state, but we can 
 *  default it to dollars. An action can be added in the future to 
 *  change state.
 */
const currencyType = (state = "USD") => {
  return state
}


// Gets product object by ID (value)
export const getProduct = (state, id) =>
  state.byId[id]


// Lists available products (value)
export const getVisibleProducts = state =>
  state.visibleIds.map(id => getProduct(state, id))


export default combineReducers({
  byId,
  visibleIds,
  currencyType
})
