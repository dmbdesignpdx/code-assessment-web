import React from 'react'
import { shallow } from 'enzyme'

import { ShopHeaderSpec } from './ShopHeader'


const setup = (products = []) => {
  const actions = {
    showCart: jest.fn()
  }

  const component = shallow(
    <ShopHeaderSpec
      products={products}
      {...actions}
    />
  )

  return {
    component,
    actions,
    button: component.find("button"),
  }
}


describe("ShopHeader Component", () => {

  it("should have a clickable button", () => {
    const { button, actions } = setup()

    button.simulate("click")
    expect(actions.showCart).toBeCalled()
  })

  describe("when there are no products in the cart", () => {

    it("should display the button as 'Your cart is empty'", () => {
      const { button } = setup()
      
      expect(button.text()).toMatch("Your cart is empty")
    })
  })

  describe("when there are products in the cart", () => {

    it("should display the button as 'View your cart'", () => {
      const { button } = setup([{}])
      
      expect(button.text()).toMatch("View your cart")
    })
  })
})
