import React from 'react'
import PropTypes from 'prop-types'


const ProductsList = ({ children }) => (
  <section className="products">

    {children}

  </section>
)

ProductsList.propTypes = {
  children: PropTypes.node,
}


export default ProductsList
