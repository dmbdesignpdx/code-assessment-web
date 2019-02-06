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

  let nodes = [

    <svg id="empty"><use xlinkHref="#cart"/></svg>,

    <em>Please add some products<br/>to your cart.</em>,

  ]

  if (hasProducts) {
    nodes = [
      products.map(product =>

        <CartItem
          key={product.id}
          product={product}
          onRemoveClicked={() => removeProduct(product.id)}
          onIncreaseClicked={() => increaseProduct(product.id)}
          onDecreaseClicked={() => decreaseProduct(product.id)}>
        </CartItem>
  
      ),

      <hr/>,

      <p>Subtotal: <span>&#36;{total}</span></p>,

      <p>Taxes: <span>&#36;{total}</span></p>,

      <hr/>,
      
      <p>Total: <span>&#36;{total}</span></p>,
      
      <button
        className="btn checkout"
        onClick={onCheckoutClicked}
        disabled={hasProducts ? '' : 'disabled'}>
        Checkout
      </button>,

    ]
  }

  return (

    <div id="cart-modal">

      <dialog>
        
        <h3>Your Cart</h3>

        <hr/>
        
        <button id="close"><svg viewBox="0 0 10 10"><path d="M2,2 8,8"/><path d="M8,2 2,8"/></svg></button>
        
        {nodes}
      
      </dialog>

    </div>

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
