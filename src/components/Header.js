import React from "react"
import { NavLink } from "react-router-dom"

import logo from "../images/logo.svg"

const Header = () => (
  <header>
    <ul>
      <li>
        <NavLink exact to="/" activeClassName="active">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" activeClassName="active">
          About
        </NavLink>
      </li>
      <li>
        <NavLink to="/topics" activeClassName="active">
          Topics
        </NavLink>
      </li>
    </ul>

    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={logo} className="App-logo" alt="logo" />
    </a>
  </header>
)

export default Header
