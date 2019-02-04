import React from "react"
import PropTypes from "prop-types"


const CartItem = ({ onRemoveClicked, children }) => {
  return (
    <article>

      {children}

      <button
        onClick={onRemoveClicked}>
        Remove
      </button>

      <input
        name="minus"
        type="button"
        value="-"
        disabled={false}
        onClick=""
      />

      <output
        name="quantity"
        htmlFor="minus plus">
        0
      </output>

      <input
        name="plus"
        type="button"
        value="+"
        disabled={false}
        onClick=""
      />

    </article>
  )
}

CartItem.protoTypes = {
  onRemoveClicked: PropTypes.func,
  children: PropTypes.node
}


export default CartItem
