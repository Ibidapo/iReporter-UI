import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Header from "./components/Header"
import { Home, NotFoundPage } from "./components/App"
import JoinUs from "./views/JoinUs"

const AppRoute = () => (
  <Router>
    <>
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
    </>
  </Router>
)

export default AppRoute
