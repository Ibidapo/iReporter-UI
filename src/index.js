import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { ToastProvider } from "react-toast-notifications"

import Header from "./components/Header"
import { Home, NotFoundPage } from "./components/App"
import JoinUs from "./pages/JoinUs"
import "./styles/index.scss"

const application = (
  <Router>
    <ToastProvider
      // autoDismiss
      // autoDismissTimeout={6000}
      placement="bottom-center"
    >
      <Header />
      <div id="main">
        <div className="container">
          <Switch>
            <Route path="/join-us" component={JoinUs} />
            <Route exact path="/" component={Home} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </div>
    </ToastProvider>
  </Router>
)

ReactDOM.render(application, document.getElementById("root"))
