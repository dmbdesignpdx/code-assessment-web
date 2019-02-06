import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'

import reducer from './reducers'
import { getAllProducts } from './actions'
import App from './containers/App'
import "./styles/master.css"


const middleware = [ thunk ];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
)


// API Fetch
store.dispatch(getAllProducts())


render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)


// Show/Hide Cart

// Show
function showCart() {
  document.querySelector("#cart-modal").style.display = "flex"
  document.querySelector("#cart-modal dialog").setAttribute("open", "")

  document.querySelector("#view").removeEventListener("click", showCart)
  document.querySelector("#close").addEventListener("click", hideCart)
}

// Hide
function hideCart() {
  document.querySelector("#cart-modal").style.display = "none"
  document.querySelector("#cart-modal dialog").removeAttribute("open")

  document.querySelector("#view").addEventListener("click", showCart)
  document.querySelector("#close").removeEventListener("click", hideCart)
}

document.querySelector("#view").addEventListener("click", showCart)
