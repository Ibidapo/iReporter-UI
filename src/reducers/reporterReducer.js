const reporterReducer = (state = {}, action) => {
  const { type, reporter } = action

  switch (type) {
    case "LOG_IN":
      return { ...reporter }
    default:
      return state
  }
}

export default reporterReducer
