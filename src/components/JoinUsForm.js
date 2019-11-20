import React from "react"
import { Link } from "react-router-dom"

const JoinUsForm = () => (
  <div className="form-container">
    <h3>Join Us</h3>
    <form>
      <label htmlFor="join-us-name">
        Full-name
        <input
          type="text"
          placeholder="Type Full-name here"
          id="join-us-name"
        />
      </label>
      <label htmlFor="join-us-email">
        Email
        <input type="text" placeholder="Type Email here" id="join-us-email" />
      </label>
      <label htmlFor="join-us-pass">
        Password
        <input
          type="password"
          placeholder="Type Password here"
          id="join-us-pass"
        />
      </label>
      <button type="submit">Submit</button>
      <span className="small">
        Already a member? <Link to="sign-in">Sign In</Link>
      </span>
    </form>
  </div>
)

export default JoinUsForm
