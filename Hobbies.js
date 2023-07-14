import React from "react"
import ReactDOM from "react-dom"

const Hobbies = (props) => {
  return (
    <div>
      <h2>My hobbies:</h2>
      <ol>
        <li>I enjoy {props.best}</li>
        <li>If it's hot outside, I like to go {props.outdoor}</li>
        <li>I also like {props.indoor}</li>
      </ol>
    </div>
  );
};

export default Hobbies;