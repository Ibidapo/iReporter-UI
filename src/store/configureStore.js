import { createStore, combineReducers } from "redux"

import incidentReducer from "../reducers/incidentReducer"
import reporterReducer from "../reducers/reporterReducer"

export default () => {
  const store = createStore(
    combineReducers({
      reporter: reporterReducer,
      incidents: incidentReducer
    })
  )

  return store
}
