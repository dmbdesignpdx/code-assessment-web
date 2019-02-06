import React from 'react'
import PropTypes from 'prop-types'

import { toMoney } from "../funcs"


const Product = ({
  price,
  title,
  currency,
  inventory,
  children,
}) => (

  <article className={inventory !== undefined ? "card" : "tile"}>

    <div className="mask">

      <img
        src={`/img/${title.toLowerCase()}.png`}
        alt=""
      />

    </div>
    
    <hgroup>

      <h3>{title}</h3>

      <h4>{toMoney(price, currency)}</h4>

    </hgroup>

    {inventory !== undefined && <p className="sub">{inventory} Remaining</p>}

    {children}

  </article>

)

Product.propTypes = {
  price: PropTypes.number,
  title: PropTypes.string,
  currency: PropTypes.string,
  inventory: PropTypes.number,
  children: PropTypes.node,
}


export default Product
