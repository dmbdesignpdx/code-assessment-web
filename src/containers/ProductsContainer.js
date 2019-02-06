import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { addToCart } from '../actions'
import { getCurrency } from "../reducers"
import { getVisibleProducts } from '../reducers/products'
import ProductItem from '../components/ProductItem'


const ProductsContainer = ({ products, currency, addToCart }) => (

  <section
    aria-label={`Product List. Contains ${products.length} products.`}>
    {products.map(product =>

      <ProductItem
        key={product.id}
        product={product}
        currency={currency}
        onAddToCartClicked={() => addToCart(product.id)}
      />

    )}
  </section>

)

ProductsContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    productTitle: PropTypes.string.isRequired,
    price: PropTypes.shape({
      value: PropTypes.number.isRequired,
    }).isRequired,
    inventory: PropTypes.number.isRequired
  })).isRequired,
  currency: PropTypes.string.isRequired,
  addToCart: PropTypes.func.isRequired,
}


const mapStateToProps = state => ({
  products: getVisibleProducts(state.products),
  currency: getCurrency(state),
})


export default connect(
  mapStateToProps,
  { addToCart }
)(ProductsContainer)
