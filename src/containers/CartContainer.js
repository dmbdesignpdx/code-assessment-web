import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { checkout, removeProduct, increaseProduct, decreaseProduct } from '../actions'
import { getTotal, getCartProducts } from '../reducers'
import Cart from '../components/Cart'


const CartContainer = ({ 
  products,
  total,
  checkout,
  removeProduct,
  increaseProduct,
  decreaseProduct,
}) => (

  <Cart
    products={products}
    total={total}
    onCheckoutClicked={() => checkout(products)}
    removeProduct={removeProduct}
    increaseProduct={increaseProduct}
    decreaseProduct={decreaseProduct}
  />

)

CartContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired
  })).isRequired,
  total: PropTypes.string,
  checkout: PropTypes.func.isRequired,
  removeProduct: PropTypes.func.isRequired,
  increaseProduct: PropTypes.func.isRequired,
  decreaseProduct: PropTypes.func.isRequired,
}


const mapStateToProps = (state) => ({
  products: getCartProducts(state),
  total: getTotal(state)
})


export default connect(
  mapStateToProps,
  { checkout,
    removeProduct,
    increaseProduct,
    decreaseProduct,
  }
)(CartContainer)
