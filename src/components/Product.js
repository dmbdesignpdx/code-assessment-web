import React from 'react'
import PropTypes from 'prop-types'


const Product = ({ price, inventory, title }) => (
  <div>
    
    <h4>{title}</h4>

    <h5>&#36;{price}</h5>

    <p>{inventory} Remaining</p>

  </div>
)

Product.propTypes = {
  price: PropTypes.number,
  inventory: PropTypes.number,
  title: PropTypes.string
}


export default Product
