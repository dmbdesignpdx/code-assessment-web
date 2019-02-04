import React from 'react'
import PropTypes from 'prop-types'


const ProductsList = ({ title, children }) => (
  <section>

    <h3>{title}</h3>

    {children}

  </section>
)

ProductsList.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired
}


export default ProductsList
