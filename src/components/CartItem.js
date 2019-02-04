import React from "react"
import PropTypes from "prop-types"


const CartItem = ({ children }) => {
  return (
    <article>

      {children}

      <button
        onClick="">
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
  children: PropTypes.node
}


export default CartItem
