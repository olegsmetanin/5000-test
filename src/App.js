import React from 'react'
import { connect } from 'react-redux'

const arr = size => new Array(size).fill(0)

const Inp = ({ value, ix, dispatch }) => (
  <input
    value={ value }
    onChange={ ev => dispatch({ type: 'CHANGE', ix, value: ev.target.value }) }
    style={{ display: 'block' }}
  />
)
const wrap = ix => connect( st => ({ ...st.data[ix], ix }) )(Inp)

const App = ({ size }) => (
  <div>
    { arr(size).map((_, ix) => React.createElement(wrap(ix), { key: ix })) }
  </div>
)
const wrapApp = connect( st => ({ size: st.size }) )(App)

export default wrapApp
