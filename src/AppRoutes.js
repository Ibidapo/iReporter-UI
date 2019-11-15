import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Header from "./components/Header"
import { Home, About, Topics, NotFoundPage } from "./components/App"
import "./styles/App.css"

const AppRoute = () => (
  <Router>
    <div className="App">
      <Header />
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} />
        <Route exact path="/" component={Home} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
)

export default AppRoute
