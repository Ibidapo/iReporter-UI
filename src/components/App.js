import React from "react"
import { Switch, Route, Link, useRouteMatch, useParams } from "react-router-dom"

import logo from "../images/logo.svg"

export const Home = () => (
  <a
    className="App-link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img src={logo} className="App-logo" alt="logo" />
  </a>
)

export function About() {
  return <p>Welcome to the About Page</p>
}

function Topic() {
  const { topicId } = useParams()
  return <p>Requested topic ID: {topicId}</p>
}

export function NotFoundPage() {
  return <p>Error 404! Page was not found</p>
}

export function Topics() {
  const match = useRouteMatch()

  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      <Switch>
        <Route path={`${match.path}/:topicId`} component={Topic} />
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </div>
  )
}
