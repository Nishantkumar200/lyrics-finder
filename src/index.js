import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Heading from "./Components/Heading";


ReactDOM.render(
  <React.StrictMode>
    <Heading />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

