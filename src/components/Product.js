import React from 'react'
import PropTypes from 'prop-types'


const Product = ({ price, title, inventory, children }) => (

  <article className={inventory !== undefined ? "card" : "tile"}>

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

    {inventory !== undefined && <p className="sub">{inventory} Remaining</p>}

    {children}

  </article>

)

Product.propTypes = {
  price: PropTypes.number,
  title: PropTypes.string,
  inventory: PropTypes.number,
  children: PropTypes.node
}


export default Product
