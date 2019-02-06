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

  let nodes = (
  
    <div>

      <svg id="empty"><use xlinkHref="#cart"/></svg>

      <em>Please add some products<br/>to your cart.</em>

    </div>
    
    )

  if (hasProducts) {
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

        <hr/>

        <p>Subtotal: <span>{toMoney(total, currency)}</span></p>

        <p>Taxes: <span>{toMoney(taxes, currency)}</span></p>

        <hr/>
        
        <p>Total: <span>{toMoney(superTotal, currency)}</span></p>
        
        <button
          className="btn checkout"
          onClick={onCheckoutClicked}
          disabled={hasProducts ? '' : 'disabled'}>
          Checkout
        </button>

      </div>
    )
  }

  return (

    <div
      id="cart-modal"
      className={showing ? "show" : ""}>

      <dialog {...showing && {open: true}}>
        
        <h3>Your Cart</h3>

        <hr/>
        
        <button
          id="close"
          onClick={onCloseClicked}>
          <svg viewBox="0 0 10 10"><path d="M2,2 8,8"/><path d="M8,2 2,8"/></svg>
        </button>
        
        {nodes}
      
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
