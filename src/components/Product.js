import React from 'react'
import PropTypes from 'prop-types'

import { toMoney } from "../funcs"


const Product = ({
  price,
  title,
  currency,
  inventory,
  children,
}) => {
  const cost = toMoney(price, currency)

  return (
  <article
    className={inventory !== undefined ? "card" : "tile"}
    aria-labelledby="article-title">

    <div className="mask">

      <img
        src={`/img/${title.toLowerCase()}.png`}
        alt={`The ${title} watch.`}
      />

    </div>
    
    <hgroup>

      <h3 id="article-title">{title}</h3>

      <h4 aria-label={`Price: ${cost}`}>{cost}</h4>

    </hgroup>

    {inventory !== undefined && <p className="sub">{inventory} Remaining</p>}

    {children}

  </article>
  )
}

Product.propTypes = {
  price: PropTypes.number,
  title: PropTypes.string,
  currency: PropTypes.string,
  inventory: PropTypes.number,
  children: PropTypes.node,
}


export default Product
