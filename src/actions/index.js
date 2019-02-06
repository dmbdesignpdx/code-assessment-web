import shop from '../api/shop'
import * as types from '../constants/ActionTypes'


// Action for the received products
const receiveProducts = products => ({
  type: types.RECEIVE_PRODUCTS,
  products: products
})


// Action for adding to cart
const addToCartUnsafe = productId => ({
  type: types.ADD_TO_CART,
  productId
})


// Action for increasing quantity in cart
const increaseQuanityInCart = productId => ({
  type: types.INCREASE_QUANTITY,
  productId
})


// Action for decreasing quantity in cart
const decreaseQuanityInCart = productId => ({
  type: types.DECREASE_QUANTITY,
  productId
})


// Action for showing cart
export const showCart = () => dispatch => {
  dispatch({
    type: types.SHOW_CART
  })
}


// Action for hiding cart
export const hideCart = () => dispatch => {
  dispatch({
    type: types.HIDE_CART
  })
}


// Retrieves products from API
export const getAllProducts = () => dispatch => {
  fetch("http://tech.work.co/shopping-cart/products.json")
    .then(result => result.json())
    .then(products => {
      dispatch(receiveProducts(products))
    })
}


// Adds the product to the cart by ID
export const addToCart = productId => (dispatch, getState) => {
  if (getState().products.byId[productId].inventory > 0) {
    dispatch(addToCartUnsafe(productId))
  }
}


// Removes the product from cart
export const removeProduct = productId => (dispatch, getState) => {
  const { cart } = getState()

  if (cart.addedIds.includes(productId)) {
    dispatch({
      type: types.REMOVE_FROM_CART,
      productId,
      quantity: cart.quantityById[productId]
    })
  }
}


// Increases quantity of product in cart
export const increaseProduct = productId => (dispatch, getState) => {
  const { products } = getState()

  if (products.byId[productId].inventory > 0) {
    dispatch(increaseQuanityInCart(productId))
  }
}


// Decreases quantity of product in cart
export const decreaseProduct = productId => (dispatch, getState) => {
  const { cart } = getState()

  if (cart.quantityById[productId] > 0) {
    dispatch(decreaseQuanityInCart(productId))
  }
}


// Performs the checkout
export const checkout = products => (dispatch, getState) => {
  const { cart } = getState()

  dispatch({
    type: types.CHECKOUT_REQUEST
  })

  // API
  shop.buyProducts(products, () => {
    dispatch({
      type: types.CHECKOUT_SUCCESS,
      cart
    })
    // Replace the line above with line below to rollback on failure:
    // dispatch({ type: types.CHECKOUT_FAILURE, cart })
  })
}
