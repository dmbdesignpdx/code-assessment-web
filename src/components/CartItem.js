import React from "react"
import PropTypes from "prop-types"

import Product from "./Product"


const CartItem = ({
  product,
  currency,
  onRemoveClicked,
  onIncreaseClicked,
  onDecreaseClicked,
}) => (

    <Product
      title={product.productTitle}
      price={product.price.value}
      currency={currency}>
    
      <button
        name="remove"
        type="button"
        className="text-remove"
        aria-label={`Remove ${product.productTitle} completely from your cart`}
        onClick={onRemoveClicked}>
        Remove
      </button>

      <div className="controls">

        <input
          name="minus"
          id="minus"
          className="btn secondary left"
          type="button"
          value="&ndash;"
          aria-label={`Add another ${product.productTitle} to your cart`}
          disabled={product.quantity === 1 ? 'disabled' : ''}
          onClick={onDecreaseClicked}
        />

        <output
          name="quantity"
          aria-label={`Currently ${product.quantity} in your cart`}
          htmlFor="minus plus">
          {product.quantity}
        </output>

        <input
          name="plus"
          id="plus"
          className="btn secondary right"
          type="button"
          value="+"
          aria-label={`Remove one ${product.productTitle} from your cart`}
          disabled={product.inventory === 0 ? 'disabled' : ''}
          onClick={onIncreaseClicked}
        />

      </div>
    
    </Product>

)

CartItem.protoTypes = {
  product: PropTypes.shape({
    productTitle: PropTypes.string.isRequired,
    price: PropTypes.shape({
      value: PropTypes.number.isRequired,
    }).isRequired,
    quantity: PropTypes.number.isRequired,
    inventory: PropTypes.number,
  }).isRequired,
  currency: PropTypes.string,
  onRemoveClicked: PropTypes.func,
  onIncreasedClicked: PropTypes.func,
  onDecreasedClicked: PropTypes.func,
}


export default CartItem
