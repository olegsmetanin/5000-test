const initial = new Array(5000).fill({ value: 'txt' })

export default (state = initial, action) => {
  switch (action.type) {
    case 'CHANGE':
      return [
        ...(state.slice(0, action.ix)),
        { value: action.value },
        ...(state.slice(action.ix + 1)),
      ]
    default:
      return state
  }
}
