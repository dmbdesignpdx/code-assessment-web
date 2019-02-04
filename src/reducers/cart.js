import {
  ADD_TO_CART,
  CHECKOUT_REQUEST,
  CHECKOUT_FAILURE,
  REMOVE_FROM_CART,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
} from '../constants/ActionTypes'


// Initial State of Cart
const initialState = {
  addedIds: [],
  quantityById: {}
}


// Manages the product in cart by ID
const managedIds = (state = initialState.addedIds, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      if (state.indexOf(action.productId) !== -1) {
        return state
      }
      return [ ...state, action.productId ]
    case REMOVE_FROM_CART:
      return state.filter(product => product !== action.productId)
    default:
      return state
  }
}


// Sets the quantity of product by ID
const quantityById = (state = initialState.quantityById, action) => {
  const { productId } = action
  
  switch (action.type) {
    case ADD_TO_CART:
    case INCREASE_QUANTITY:
      return {
        ...state,
        [productId]: (state[productId] || 0) + 1
      }
    case DECREASE_QUANTITY: {
      return {
        ...state,
        [productId]: state[productId] - 1
      }
    }
    case REMOVE_FROM_CART: {
      return {
        ...state,
        [productId]: 0
      }
    }
    default:
      return state
  }
}


// Produces the quantity of the product (value)
export const getQuantity = (state, productId) =>
  state.quantityById[productId] || 0


// Lists the added IDs (value)
export const getAddedIds = state => state.addedIds


// Checkout
const cart = (state = initialState, action) => {
  switch (action.type) {
    case CHECKOUT_REQUEST:
      return initialState
    case CHECKOUT_FAILURE:
      return action.cart
    default:
      return {
        addedIds: managedIds(state.addedIds, action),
        quantityById: quantityById(state.quantityById, action)
      }
  }
}


export default cart
