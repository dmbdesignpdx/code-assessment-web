import React from 'react'
import PropTypes from 'prop-types'

import Product from './Product'


const Cart  = ({ products, total, onCheckoutClicked }) => {
  const hasProducts = products.length > 0
  const nodes = hasProducts ? (
    products.map(product =>
      <article key={product.id}>

        <Product
          title={product.title}
          price={product.price}
          quantity={product.quantity}
        />

      </article>
    )
  ) : (
    <em>Please add some products to cart.</em>
  )

  return (
    <dialog open>
      
      <h3>Your Cart</h3>
      
      {nodes}
      
      <p>Total: &#36;{total}</p>
      
      <button
        onClick={onCheckoutClicked}
        disabled={hasProducts ? '' : 'disabled'}>
        Checkout
      </button>
    
    </dialog>
  )
}

Cart.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string,
  onCheckoutClicked: PropTypes.func
}


export default Cart
