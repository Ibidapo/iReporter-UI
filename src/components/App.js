import React from "react"

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

export function NotFoundPage() {
  return <p>Error 404! Page was not found</p>
}
