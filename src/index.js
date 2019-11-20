import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"

import AppRoutes from "./AppRoutes"
import configureStore from "./store/configureStore"
import "./styles/index.scss"

const store = configureStore()

const Application = (
  <Provider store={store}>
    <AppRoutes />
  </Provider>
)

ReactDOM.render(Application, document.getElementById("root"))
