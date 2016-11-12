import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import AppSimple from './simple/App'
import reducerSimple from './simple/reducer'

import AppConnect from './connect/App'
import reducerConnect from './connect/reducer'

const storeSimple = createStore(reducerSimple)

const renderSimple = () => ReactDOM.render(
  <AppSimple
    store={storeSimple.getState()}
    change={(ix, value) => storeSimple.dispatch({ type: 'CHANGE', ix, value })}
  />,
  document.getElementById('simple')
)

renderSimple()
storeSimple.subscribe(renderSimple)

const storeConnect = createStore(reducerConnect)

const renderConnect = () => ReactDOM.render(
  <Provider store={storeConnect}>
    <AppConnect />
  </Provider>,
  document.getElementById('connect')
)

renderConnect()
