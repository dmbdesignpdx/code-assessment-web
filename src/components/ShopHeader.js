import React from "react"
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { showCart } from "../actions"
import { getCartProducts } from '../reducers'


const ShopHeader = ({ products, showCart }) => {
  return (

    <header>

      <h2>Acme Store</h2>

      <button
        id="view"
        className="text-link"
        onClick={showCart}>

        <svg><use xlinkHref="#cart"/></svg>

        {products.length > 0 ? "View your cart" : "Your cart is empty"}

      </button>

    </header>

  )
}

ShopHeader.propTypes = {
  products: PropTypes.array.isRequired,
  showCart: PropTypes.func.isRequired,
}


const mapStateToProps = state => ({
  products: getCartProducts(state),
})


export default connect(mapStateToProps, { showCart })(ShopHeader)
