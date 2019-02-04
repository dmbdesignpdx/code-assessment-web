import React from "react"
import PropTypes from "prop-types"


const CartItem = ({
  quantity,
  inventory,
  onRemoveClicked,
  onIncreaseClicked,
  onDecreaseClicked,
  children,
}) => {
  return (
    <article>

      {children}

      <button
        name="remove"
        onClick={onRemoveClicked}>
        Remove
      </button>

      <input
        name="minus"
        type="button"
        value="-"
        disabled={quantity === 1 ? 'disabled' : ''}
        onClick={onDecreaseClicked}
      />

      <output
        name="quantity"
        htmlFor="minus plus">
        {quantity}
      </output>

      <input
        name="plus"
        type="button"
        value="+"
        disabled={inventory === 0 ? 'disabled' : ''}
        onClick={onIncreaseClicked}
      />

    </article>
  )
}

CartItem.protoTypes = {
  quantity: PropTypes.number,
  inventory: PropTypes.number,
  onRemoveClicked: PropTypes.func,
  onIncreasedClicked: PropTypes.func,
  onDecreasedClicked: PropTypes.func,
  children: PropTypes.node,
}


export default CartItem
