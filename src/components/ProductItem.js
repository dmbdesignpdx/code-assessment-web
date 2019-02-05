import React from 'react'
import PropTypes from 'prop-types'

import Product from './Product'


const ProductItem = ({ product, onAddToCartClicked }) => (

  <Product
    title={product.title}
    price={product.price}
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
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired
  }).isRequired,
  onAddToCartClicked: PropTypes.func.isRequired
}


export default ProductItem
