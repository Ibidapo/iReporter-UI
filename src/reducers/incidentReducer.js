const incidentReducer = (state = [], action) => {
  const { type, incidents } = action

  switch (type) {
    case "FETCH_INCIDENTS":
      return [...state, ...incidents]
    default:
      return state
  }
}

export default incidentReducer
