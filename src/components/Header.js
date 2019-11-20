import React from "react"
import { Link } from "react-router-dom"

import altLogo from "../images/alt-logo.png"

const Header = () => (
  <nav className="container">
    <Link to="/">
      <img src={altLogo} alt="iReporter logo" />
    </Link>
    <div>
      <Link to="/join-us"> Join Us </Link>
      <span>or</span>
      <Link to="/login" className="active">
        Login
      </Link>
    </div>
  </nav>
)

export default Header
