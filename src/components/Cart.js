import React from 'react'
import PropTypes from 'prop-types'

import CartItem from "./CartItem"


const Cart = ({
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
        product={product}
        onRemoveClicked={() => removeProduct(product.id)}
        onIncreaseClicked={() => increaseProduct(product.id)}
        onDecreaseClicked={() => decreaseProduct(product.id)}>
      </CartItem>

    )
  ) : (
    <em>Please add some products to cart.</em>
  )

  return (

    <dialog open>
      
      <h3>Your Cart</h3>
      
      {nodes}

      <hr/>
      
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
