import React from "react";
import ReactPlayer from "react-player";
import "./Youtube.css";

function App() {
  return (
    <div style={{fontSize:"30px"}}>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=l8EMHRcWJqo&ab_channel=BIGNOSE"
      />
    </div>
  )
}

export default App