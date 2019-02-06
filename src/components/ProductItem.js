import React from 'react'
import PropTypes from 'prop-types'

import Product from './Product'


const ProductItem = ({ product, currency, onAddToCartClicked }) => (

  <Product
    title={product.productTitle}
    price={product.price.value}
    currency={currency}
    inventory={product.inventory}>

    <button
      className="btn primary"
      type="button"
      onClick={onAddToCartClicked}
      disabled={product.inventory > 0 ? '' : 'disabled'}>
      {product.inventory > 0 ? 'Add to cart' : 'Sold out'}
    </button>

  </Product>

)

ProductItem.propTypes = {
  product: PropTypes.shape({
    productTitle: PropTypes.string.isRequired,
    price: PropTypes.shape({
      value: PropTypes.number.isRequired,
    }).isRequired,
    inventory: PropTypes.number.isRequired,
  }).isRequired,
  currency: PropTypes.string.isRequired,
  onAddToCartClicked: PropTypes.func.isRequired,
}


export default ProductItem
