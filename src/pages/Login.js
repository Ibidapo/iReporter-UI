import React from "react"
import { useToasts } from "react-toast-notifications"

import store from "../configureStore/reporter"
import LoginForm from "../components/LoginForm"
import "../styles/login.scss"

const Login = () => {
  const { addToast } = useToasts()

  return (
    <div className="row" id="login">
      <div className="d-none d-lg-flex col-lg-5 col-quote">
        <p className="block-quote">
          “And that is how change happens. One gesture. One person. One moment
          at a time.”
        </p>
        <p className="quoter">- Libba Bray</p>
      </div>
      <div className="col-12 col-lg-5">
        <LoginForm store={store} addToast={addToast} />
      </div>
    </div>
  )
}

export default Login
