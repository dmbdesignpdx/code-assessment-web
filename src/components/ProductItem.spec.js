import React from 'react'
import { shallow } from 'enzyme'

import Product from './Product'
import ProductItem from './ProductItem'


const setup = (product, currency = "USD") => {
  const actions = {
    onAddToCartClicked: jest.fn()
  }

  const component = shallow(
    <ProductItem
      product={product}
      currency={currency}
      {...actions}
    />
  )

  return {
    component,
    actions,
    currency,
    button: component.find('button'),
    product: component.find(Product),
  }
}

const mockProduct = {
  productTitle: "Product 1",
  price: {
    value: 9.99
  },
  inventory: 10,
}


describe("ProductItem Component", () => {

  it("should have a button that adds to the cart", () => {
    const { button, actions } = setup(mockProduct)

    button.simulate("click")
    expect(actions.onAddToCartClicked).toBeCalled()
  })

  it("should disable add button when no inventory", () => {
    const { button } = setup({ ...mockProduct, inventory: 0 })

    expect(button.props().disabled).toMatch("")
  })


  describe("with a product", () => {

    it("should render that product", () => {
      const { product, currency } = setup(mockProduct)
      const props = {
        title: mockProduct.productTitle,
        price: mockProduct.price.value,
        currency: currency,
        inventory: mockProduct.inventory,
        children: product.props().children,
      }

      expect(product.props()).toEqual(props)
    })
  })
})

