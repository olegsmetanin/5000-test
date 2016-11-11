const initial = {
  data: new Array(5000).fill({ value: 'txt' }),
  size: 5000,
}

export default (state = initial, action) => {
  switch (action.type) {
    case 'CHANGE':
      return {
        ...state,
        data: [
          ...(state.data.slice(0, action.ix)),
          { value: action.value },
          ...(state.data.slice(action.ix + 1)),
        ],
      }
    default:
      return state
  }
}
