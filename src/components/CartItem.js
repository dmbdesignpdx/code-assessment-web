import React from "react"
import PropTypes from "prop-types"

import Product from "./Product"


const CartItem = ({
  product,
  onRemoveClicked,
  onIncreaseClicked,
  onDecreaseClicked,
}) => (

    <Product
      title={product.productTitle}
      price={product.price.value}>
    
      <button
        name="remove"
        className="text-remove"
        onClick={onRemoveClicked}>
        Remove
      </button>

      <div className="controls">

        <input
          name="minus"
          className="btn secondary left"
          type="button"
          value="&ndash;"
          disabled={product.quantity === 1 ? 'disabled' : ''}
          onClick={onDecreaseClicked}
        />

        <output
          name="quantity"
          htmlFor="minus plus">
          {product.quantity}
        </output>

        <input
          name="plus"
          className="btn secondary right"
          type="button"
          value="+"
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
      currency: PropTypes.string.isRequired,
    }).isRequired,
    quantity: PropTypes.number.isRequired,
    inventory: PropTypes.number,
  }).isRequired,
  onRemoveClicked: PropTypes.func,
  onIncreasedClicked: PropTypes.func,
  onDecreasedClicked: PropTypes.func,
  children: PropTypes.node,
}


export default CartItem
