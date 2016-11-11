import React from 'react'

const App = ({
  store,
  change,
}) => (
  <div>
    { store.map(({ value }, ix) => (
      <input
        key={ ix }
        value={ value }
        onChange={ ev => change(ix, ev.target.value) }
        style={{ display: 'block' }}
      />
    )) }
  </div>
)

export default App
