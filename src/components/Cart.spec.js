import React from 'react'
import { shallow } from 'enzyme'

import Cart from './Cart'
import CartItem from './CartItem'


const setup = (total, products = [], showing = false, currency = "USD") => {
  const actions = {
    onCheckoutClicked: jest.fn(),
    onCloseClicked: jest.fn(),
    removeProduct: jest.fn(),
    increaseProduct: jest.fn(),
    decreaseProduct: jest.fn(),
  }

  const component = shallow(
    <Cart
      products={products}
      total={total}
      showing={showing}
      currency={currency}
      {...actions}
    />
  )

  return {
    component,
    actions,
    showing,
    currency,
    cartitems: component.find(CartItem),
    em: component.find('em'),
    total: component.find('#total'),
    subtotal: component.find('#subtotal'),
    taxes: component.find('#taxes'),
    close: component.find('.close'),
    checkout: component.find('.checkout'),
  }
}


describe('Cart component', () => {

  it("should not display initialy", () => {
    const { showing } = setup()
    
    expect(showing).toEqual(false)
  })

  it("should be using dollars", () => {
    const { currency } = setup()
    
    expect(currency).toEqual("USD")
  })

  it("should display 'add some products' message", () => {
    const { em } = setup()
    
    expect(em.text()).toMatch("Please add some products to your cart.")
  })

  it("should have a close button", () => {
    const { close, actions } = setup()
    
    close.simulate("click")
    expect(actions.onCloseClicked).toBeCalled()
  })


  describe('when given product', () => {
    const product = [
      {
        id: 1,
        title: 'Product 1',
        price: 9.99,
        quantity: 1
      }
    ]

    it('should render products', () => {
      const { cartitems, currency } = setup('9.99', product)
      const props = {
        currency: currency,
        product: {
          id: product[0].id,
          title: product[0].title,
          price: product[0].price,
          quantity: product[0].quantity
        },
        onRemoveClicked: cartitems.at(0).props().onRemoveClicked,
        onIncreaseClicked: cartitems.at(0).props().onIncreaseClicked,
        onDecreaseClicked: cartitems.at(0).props().onDecreaseClicked,
      }

      expect(cartitems.at(0).props()).toEqual(props)
    })

    it("should show subtotal", () => {
      const { subtotal } = setup("9.99", product)
      
      expect(subtotal.text()).toMatch("Subtotal: \$9.99")
    })

    it("should show taxes", () => {
      const { taxes } = setup("9.99", product)
      
      expect(taxes.text()).toMatch("Taxes: \$0.87")
    })

    it("should show total", () => {
      const { total } = setup("9.99", product)
      
      expect(total.text()).toMatch("Total: \$10.86")
    })


    it('should checkout on click', () => {
      const { checkout, actions } = setup('9.99', product)
      
      checkout.simulate('click')
      expect(actions.onCheckoutClicked).toBeCalled()
    })
  })
})
