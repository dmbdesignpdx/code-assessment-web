import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import {
  checkout,
  hideCart,
  removeProduct,
  increaseProduct,
  decreaseProduct,
} from '../actions'

import {
  getTotal,
  getCartProducts,
  modalState,
  getCurrency,
} from '../reducers'

import Cart from '../components/Cart'


const CartContainer = ({ 
  products,
  showing,
  total,
  currency,
  checkout,
  hideCart,
  removeProduct,
  increaseProduct,
  decreaseProduct,
}) => (

  <Cart
    products={products}
    total={total}
    showing={showing}
    currency={currency}
    onCheckoutClicked={() => checkout(products)}
    onCloseClicked={() => hideCart()}
    removeProduct={removeProduct}
    increaseProduct={increaseProduct}
    decreaseProduct={decreaseProduct}
  />

)

CartContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    productTitle: PropTypes.string.isRequired,
    price: PropTypes.shape({
      value: PropTypes.number.isRequired,
    }).isRequired,
    quantity: PropTypes.number.isRequired
  })).isRequired,
  showing: PropTypes.bool.isRequired,
  total: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  checkout: PropTypes.func.isRequired,
  hideCart: PropTypes.func.isRequired,
  removeProduct: PropTypes.func.isRequired,
  increaseProduct: PropTypes.func.isRequired,
  decreaseProduct: PropTypes.func.isRequired,
}


const mapStateToProps = state => ({
  products: getCartProducts(state),
  total: getTotal(state),
  showing: modalState(state),
  currency: getCurrency(state),
})


export default connect(
  mapStateToProps,
  {
    checkout,
    hideCart,
    removeProduct,
    increaseProduct,
    decreaseProduct,
    modalState,
  }
)(CartContainer)
