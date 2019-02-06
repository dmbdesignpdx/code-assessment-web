import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { addToCart } from '../actions'
import { getVisibleProducts } from '../reducers/products'
import ProductItem from '../components/ProductItem'


const ProductsContainer = ({ products, addToCart }) => (

  <section>
    {products.map(product =>

      <ProductItem
        key={product.id}
        product={product}
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
      currency: PropTypes.string.isRequired,
    }).isRequired,
    inventory: PropTypes.number.isRequired
  })).isRequired,
  addToCart: PropTypes.func.isRequired
}


const mapStateToProps = state => ({
  products: getVisibleProducts(state.products)
})


export default connect(
  mapStateToProps,
  { addToCart }
)(ProductsContainer)
