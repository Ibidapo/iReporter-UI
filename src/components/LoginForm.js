import React, { Component } from "react"
import { Link } from "react-router-dom"
import { observer } from "mobx-react"
import PropTypes from "prop-types"

@observer
class LoginForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: "",
      password: "",
      isLoading: false
    }
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value })
  }

  async handleSubmit(e) {
    e.preventDefault()

    const { isLoading } = this.state
    if (isLoading) return
    this.setState({ isLoading: true })

    const {
      store: { loginUser },
      addToast
    } = this.props
    const { message, error } = await loginUser(this.state)

    if (message) addToast(message, { appearance: "success" })
    else addToast(error, { appearance: "error" })
    this.setState({ isLoading: false })
  }

  render() {
    const { email, password, isLoading } = this.state

    return (
      <div className="form-container">
        <h3>Login</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label htmlFor="login-email">
            Email
            <input
              type="text"
              placeholder="Type Email here"
              id="login-email"
              name="email"
              value={email}
              onChange={this.handleChange.bind(this)}
            />
          </label>
          <label htmlFor="login-pass">
            Password
            <input
              type="password"
              placeholder="Type Password here"
              id="login-pass"
              name="password"
              value={password}
              onChange={this.handleChange.bind(this)}
            />
          </label>
          <button type="submit" disabled={isLoading}>
            {isLoading ? <span className="spinner-disc" /> : "Submit"}
          </button>
          <span className="small">
            Not a member? <Link to="join-us">Join Us</Link>
          </span>
        </form>
      </div>
    )
  }
}

LoginForm.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  store: PropTypes.object.isRequired,
  addToast: PropTypes.func.isRequired
}

export default LoginForm
