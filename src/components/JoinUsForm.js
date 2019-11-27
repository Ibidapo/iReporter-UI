import React, { Component } from "react"
import { Link } from "react-router-dom"
import { observer } from "mobx-react"
import PropTypes from "prop-types"

@observer
class JoinUsForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "",
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
      store: { registerUser },
      addToast
    } = this.props
    const { message, error } = await registerUser(this.state)

    if (message) addToast(message, { appearance: "success" })
    else addToast(error, { appearance: "error" })
    this.setState({ isLoading: false })
  }

  render() {
    const { name, email, password, isLoading } = this.state

    return (
      <div className="form-container">
        <h3>Join Us</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label htmlFor="join-us-name">
            Full-name
            <input
              type="text"
              placeholder="Type Full-name here"
              id="join-us-name"
              name="name"
              value={name}
              onChange={this.handleChange.bind(this)}
            />
          </label>
          <label htmlFor="join-us-email">
            Email
            <input
              type="text"
              placeholder="Type Email here"
              id="join-us-email"
              name="email"
              value={email}
              onChange={this.handleChange.bind(this)}
            />
          </label>
          <label htmlFor="join-us-pass">
            Password
            <input
              type="password"
              placeholder="Type Password here"
              id="join-us-pass"
              name="password"
              value={password}
              onChange={this.handleChange.bind(this)}
            />
          </label>
          <button type="submit" disabled={isLoading}>
            {isLoading ? <span className="spinner-disc" /> : "Submit"}
          </button>
          <span className="small">
            Already a member? <Link to="sign-in">Sign In</Link>
          </span>
        </form>
      </div>
    )
  }
}

JoinUsForm.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  store: PropTypes.object.isRequired,
  addToast: PropTypes.func.isRequired
}

export default JoinUsForm
