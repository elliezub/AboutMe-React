import React from "react";
import ReactDOM from "react-dom";
import Heading from "./Heading.js";
import Hobbies from "./Hobbies.js";
import Contact from "./Contact.js";

const App = () => {
  return (
    <div className="maindiv">
      <Heading name="Ellie Zubrowski" />
      <Hobbies
        best="playing League of Legends"
        outdoor="swimming at the beach"
        indoor="learning to code"
      />
      <Contact greeting="Contact me" callToAction="Email me" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

export default App;
