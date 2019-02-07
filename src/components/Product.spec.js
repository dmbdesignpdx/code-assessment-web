import React from 'react'
import { shallow } from 'enzyme'

import Product from './Product'


const setup = props => {
  const component = shallow(
    <Product {...props} />
  )

  return {
    component,
    title: component.find("h3"),
    price: component.find("h4"),
    remaining: component.find(".sub"),
  }
}

const props = {
  price: 9.99,
  title: "Product 1",
  currency: "USD",
  children: <div id="child"></div>
}


describe("Product Component", () => {

  it("should its children", () => {
    expect(setup(props).component.contains(<div id="child"></div>)).toEqual(true)
  })

  it("should render a title", () => {
    const { title } = setup(props)

    expect(title.text()).toMatch("Product 1")
  })

  it("should render a price", () => {
    const { price } = setup(props)

    expect(price.text()).toMatch("9.99")
  })


  describe("when in the product list", () => {

    it("should render the number remaining in inventory", () => {
      const { remaining } = setup({ ...props, inventory: 10 })

      expect(remaining.text()).toMatch("10 Remaining")
    })
  })


  describe("when in the cart", () => {

    it("should not render the number remaining in inventory", () => {
      const { remaining } = setup(props)

      expect(remaining.exists()).toEqual(false)
    })
  })
})
