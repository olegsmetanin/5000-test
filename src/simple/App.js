import React from 'react'
import shallowEqual from 'fbjs/lib/shallowEqual'
import Perf from 'react-addons-perf'

class Inp extends React.Component {
  shouldComponentUpdate (props, state) {
    return !shallowEqual(this.props.data, props.data)
  }
  change(...args) {
    Perf.start()
    setTimeout(() => {
      Perf.stop()
      console.log('<<<<<<   Simple + pure   >>>>>>')
      Perf.printInclusive()
      Perf.printExclusive()
      Perf.printWasted()
      Perf.printOperations()
    }, 1000)
    this.props.change(...args)
  }
  render () {
    const { ix, data } = this.props
    return (
      <input
        value={ data.value }
        onChange={ ev => this.change(ix, ev.target.value) }
        style={{ display: 'block', marginBottom: 5 }}
      />
    )
  }
}

const App = ({
  store,
  change,
}) => (
  <div>
    <h5>Simple + pure</h5>
    { store.map((data, ix) => (
      <Inp {...{ key: ix, ix, data, change }} />
    )) }
  </div>
)

export default App
