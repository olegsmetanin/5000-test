import React from 'react'
import shallowEqual from 'fbjs/lib/shallowEqual'

class Inp extends React.Component {
  shouldComponentUpdate (props, state) {
    return !shallowEqual(this.props.data, props.data)
  }
  render () {
    const { ix, data, change } = this.props
    return (
      <input
        value={ data.value }
        onChange={ ev => change(ix, ev.target.value) }
        style={{ display: 'block' }}
      />
    )
  }
}

const App = ({
  store,
  change,
}) => (
  <div>
    { store.map((data, ix) => (
      <Inp {...{ key: ix, ix, data, change }} />
    )) }
  </div>
)

export default App
