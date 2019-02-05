import React from 'react'
import PropTypes from 'prop-types'


const Product = ({ price, inventory, title }) => (
  <div>

    <div className="mask">

      <img
        src={`/img/${title.toLowerCase()}.png`}
        alt=""
      />

    </div>
    
    <hgroup>

      <h3>{title}</h3>

      <h4>&#36;{price}</h4>

    </hgroup>

    <p className="sub">{inventory} Remaining</p>

  </div>
)

Product.propTypes = {
  price: PropTypes.number,
  inventory: PropTypes.number,
  title: PropTypes.string
}


export default Product
