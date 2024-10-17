import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Notification";

ReactDOM.render(
  <App text="All databases will be upgraded to support the latest features on Sunday. Please ensure you have a backup of your data." />,
  document.getElementById("root")
);
