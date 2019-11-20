import React from "react"

import JoinUsForm from "../components/JoinUsForm"
import "../styles/join-us.css"

const JoinUs = () => (
  <div className="row" id="join-us">
    <div className="col col-5 col-quote">
      <p className="block-quote">
        “Change will not come if we wait for some other person or time. We are
        the ones we&apos;ve been waiting for. We are the change that we seek.”
      </p>
      <p className="quoter">- Barrack Obama</p>
    </div>
    <div className="col col-5">
      <JoinUsForm />
    </div>
  </div>
)

export default JoinUs
