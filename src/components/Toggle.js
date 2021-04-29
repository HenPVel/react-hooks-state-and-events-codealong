import React, {useState} from "react";

function Toggle() {

const [whatIShouldSay, setWhatIShouldSay] = useState(true)  

function togglaBoy() {
  setWhatIShouldSay(!whatIShouldSay)
  console.log("brrrrat")
}

  return <button style={{background: whatIShouldSay ? "white" : "red"}} onClick={togglaBoy}>{whatIShouldSay ? "OFF" : "ON"}</button>;
}

export default Toggle;
