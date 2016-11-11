import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'

import App from './App'
import reducer from './reducer'

const store = createStore(reducer)
const rootEl = document.getElementById('root')

const render = () => ReactDOM.render(
  <App
    store={store.getState()}
    change={(ix, value) => store.dispatch({ type: 'CHANGE', ix, value })}
  />,
  rootEl
)

render()
store.subscribe(render)
