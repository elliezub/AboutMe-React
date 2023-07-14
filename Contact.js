import React from "react"
import ReactDOM from "react-dom"

const Contact = (props) => {
  return (
    <div>
      <h3>{props.greeting}</h3>
      <button><a href="mailto:ellieslife@icloud.com" rel="noopener noreferrer" target="_blank">{props.callToAction}</a></button>
    </div>
  )
}

export default Contact;