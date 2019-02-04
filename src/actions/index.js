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


// Retrieves products from API
export const getAllProducts = () => dispatch => {
  shop.getProducts(products => {
    dispatch(receiveProducts(products))
  })
}


// Adds the product to the cart by ID
export const addToCart = productId => (dispatch, getState) => {
  if (getState().products.byId[productId].inventory > 0) {
    dispatch(addToCartUnsafe(productId))
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
