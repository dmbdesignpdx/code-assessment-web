import React from 'react'
import PropTypes from 'prop-types'

import Product from './Product'
import CartItem from "./CartItem"


const Cart  = ({
  products,
  total,
  onCheckoutClicked,
  removeProduct,
  increaseProduct,
  decreaseProduct,
}) => {
  const hasProducts = products.length > 0
  const nodes = hasProducts ? (
    products.map(product =>
      <CartItem
        key={product.id}
        quantity={product.quantity}
        inventory={product.inventory}
        onRemoveClicked={() => removeProduct(product.id)}
        onIncreaseClicked={() => increaseProduct(product.id)}
        onDecreaseClicked={() => decreaseProduct(product.id)}>

        <Product
          title={product.title}
          price={product.price}
          quantity={product.quantity}
        />

      </CartItem>
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
  onCheckoutClicked: PropTypes.func,
  removeProduct: PropTypes.func,
  increaseProduct: PropTypes.func,
  decreaseProduct: PropTypes.func,
}


export default Cart
