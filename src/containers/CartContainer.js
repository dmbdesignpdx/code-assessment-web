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
import { getTotal, getCartProducts, modalState } from '../reducers'
import Cart from '../components/Cart'


const CartContainer = ({ 
  products,
  showing,
  total,
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
    price: PropTypes.objectOf(PropTypes.shape({
      value: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
    })).isRequired,
    quantity: PropTypes.number.isRequired
  })).isRequired,
  total: PropTypes.string,
  showing: PropTypes.bool,
  hideCart: PropTypes.func.isRequired,
  checkout: PropTypes.func.isRequired,
  removeProduct: PropTypes.func.isRequired,
  increaseProduct: PropTypes.func.isRequired,
  decreaseProduct: PropTypes.func.isRequired,
}


const mapStateToProps = state => ({
  products: getCartProducts(state),
  total: getTotal(state),
  showing: modalState(state)
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
