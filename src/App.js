import React from 'react'
import { connect } from 'react-redux'
import Perf from 'react-addons-perf'

const arr = size => new Array(size).fill(0)

class Inp extends React.Component {
  change(args) {
    Perf.start()
    setTimeout(() => {
      Perf.stop()
      Perf.printInclusive()
      Perf.printExclusive()
      Perf.printWasted()
      Perf.printOperations()
    }, 1000)
    this.props.dispatch({ type: 'CHANGE', ...args })
  }
  render () {
    const { ix, data } = this.props
    return (
      <input
        value={ data.value }
        onChange={ ev => this.change({ ix, value: ev.target.value }) }
        style={{ display: 'block' }}
      />
    )
  }
}
const wrap = ix => connect( st => ({ data: st.data[ix], ix }) )(Inp)

const App = ({ size }) => (
  <div>
    { arr(size).map((_, ix) => React.createElement(wrap(ix), { key: ix })) }
  </div>
)
const wrapApp = connect( st => ({ size: st.size }) )(App)

export default wrapApp
