import React from 'react'
import PropTypes from 'prop-types'

import { toMoney } from "../funcs"
import CartItem from "./CartItem"


const Cart = ({
  products,
  total,
  showing,
  currency,
  onCloseClicked,
  onCheckoutClicked,
  removeProduct,
  increaseProduct,
  decreaseProduct,
}) => {
  const hasProducts = products.length > 0
  const taxes = (total * 0.087).toFixed(2)
  const superTotal = parseFloat(total) + parseFloat(taxes)

  // Default Empty Cart
  let nodes = (
  
    <div>

      <svg className="empty"><use xlinkHref="#cart"/></svg>

      <em>Please add some products<br/> to your cart.</em>

    </div>
    
    )

  if (hasProducts) {
    // List Products in Cart
    nodes = (

      <div>
        {products.map(product =>

          <CartItem
            key={product.id}
            product={product}
            currency={currency}
            onRemoveClicked={() => removeProduct(product.id)}
            onIncreaseClicked={() => increaseProduct(product.id)}
            onDecreaseClicked={() => decreaseProduct(product.id)}>
          </CartItem>
    
        )}

        <hr aria-hidden="true"/>

        <p id="subtotal">Subtotal: <span>{toMoney(total, currency)}</span></p>

        <p id="taxes">Taxes: <span>{toMoney(taxes, currency)}</span></p>

        <hr aria-hidden="true"/>
        
        <p id="total">Total: <span>{toMoney(superTotal, currency)}</span></p>
        
        <button
          className="btn checkout"
          aria-label="proceed to checkout"
          onClick={onCheckoutClicked}
          disabled={hasProducts ? '' : 'disabled'}>
          Checkout
        </button>

      </div>
    )
  }

  return (

    <div className={"cart-background " + (showing ? "show" : "")}>

      <dialog
        className="cart"
        aria-labelledby="cart-title"
        aria-modal={showing ? "true" : "false"}
        {...showing && {open: true}}>
        
        <h3 id="cart-title">Your Cart</h3>

        <hr aria-hidden="true"/>
        
        {nodes}

        <button
          className="close"
          type="button"
          aria-label="Close your cart"
          onClick={onCloseClicked}>
          <svg viewBox="0 0 10 10"><path d="M2,2 8,8"/><path d="M8,2 2,8"/></svg>
        </button>
      
      </dialog>

    </div>

  )
}

Cart.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string,
  showing: PropTypes.bool,
  currency: PropTypes.string,
  onCloseClicked: PropTypes.func,
  onCheckoutClicked: PropTypes.func,
  removeProduct: PropTypes.func,
  increaseProduct: PropTypes.func,
  decreaseProduct: PropTypes.func,
}


export default Cart
