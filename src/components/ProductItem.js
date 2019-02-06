import React from 'react'
import PropTypes from 'prop-types'

import Product from './Product'


const ProductItem = ({ product, onAddToCartClicked }) => (

  <Product
    title={product.productTitle}
    price={product.price.value}
    inventory={product.inventory}>

    <button
      className="btn primary"
      onClick={onAddToCartClicked}
      disabled={product.inventory > 0 ? '' : 'disabled'}>
      {product.inventory > 0 ? 'Add to cart' : 'Sold Out'}
    </button>

  </Product>

)

ProductItem.propTypes = {
  product: PropTypes.shape({
    productTitle: PropTypes.string.isRequired,
    price: PropTypes.shape({
      value: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired,
    inventory: PropTypes.number.isRequired
  }).isRequired,
  onAddToCartClicked: PropTypes.func.isRequired
}


export default ProductItem
