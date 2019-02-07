import React from 'react'
import { shallow } from 'enzyme'

import CartItem from "./CartItem"
import Product from "./Product"


const setup = (product, currency = "USD") => {
  const actions = {
    onRemoveClicked: jest.fn(),
    onIncreaseClicked: jest.fn(),
    onDecreaseClicked: jest.fn(),    
  }

  const component = shallow(
    <CartItem
      product={product}
      currency={currency}
      {...actions}
    />
  )

  return {
    component,
    actions,
    product,
    currency,
    product: component.find(Product),
    increase: component.find("#plus"),
    decrease: component.find("#minus"),
    remove: component.find("button"),
    output: component.find("output"),
  }
}

const mockProduct = {
  productTitle: "Product 1",
  price: {
    value: 9.99
  },
  quantity: 1,
  inventory: 10
}


describe("CartItem Component", () => {

  it('should render a product', () => {
    const { product, currency } = setup(mockProduct)
    const props = {
      title: mockProduct.productTitle,
      price: mockProduct.price.value,
      currency: currency,
      children: product.props().children,
    }

    expect(product.props()).toEqual(props)
  })

  it("should have a button to increase quantity", () => {
    const { increase, actions } = setup(mockProduct)

    increase.simulate("click")
    expect(actions.onIncreaseClicked).toBeCalled()
  })

  it("should have abutton to decrease quantity", () => {
    const { decrease, actions } = setup(mockProduct)

    decrease.simulate("click")
    expect(actions.onDecreaseClicked).toBeCalled()
  })

  it("should have an output of quantity", () => {
    const { output } = setup(mockProduct)

    expect(output.text()).toMatch("1")
  })

  it("should have a button to remove item", () => {
    const { remove, actions } = setup(mockProduct)
    
    remove.simulate("click")
    expect(actions.onRemoveClicked).toBeCalled()
  })
})
