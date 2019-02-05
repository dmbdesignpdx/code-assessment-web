import React from 'react'

import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'
import ShopHeader from "../components/ShopHeader"


const App = () => (
  <main>

    <ShopHeader />

    <hr/>

    <ProductsContainer />

    <CartContainer />

  </main>
)


export default App
