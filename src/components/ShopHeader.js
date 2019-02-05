import React from "react"
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { getCartProducts } from '../reducers'


const ShopHeader = ({ products }) => {
  return (
    <header>

      <h2>Acme Store</h2>

      <button className="text-link">

        <svg><use xlinkHref="#cart"/></svg>

        {products.length > 0 ? "View your cart" : "Your cart is empty"}

      </button>

    </header>
  )
}

ShopHeader.propTypes = {
  products: PropTypes.array.isRequired,
}


const mapStateToProps = (state) => ({
  products: getCartProducts(state),
})


export default connect(mapStateToProps)(ShopHeader)
