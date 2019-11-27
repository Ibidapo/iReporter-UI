import React from "react"
import { useToasts } from "react-toast-notifications"

import store from "../configureStore/reporter"
import JoinUsForm from "../components/JoinUsForm"
import "../styles/join-us.scss"

const JoinUs = () => {
  const { addToast } = useToasts()

  return (
    <div className="row" id="join-us">
      <div className="d-none d-lg-flex col-lg-5 col-quote">
        <p className="block-quote">
          “Change will not come if we wait for some other person or time. We are
          the ones we&apos;ve been waiting for. We are the change that we seek.”
        </p>
        <p className="quoter">- Barrack Obama</p>
      </div>
      <div className="col-12 col-lg-5">
        <JoinUsForm store={store} addToast={addToast} />
      </div>
    </div>
  )
}

export default JoinUs
