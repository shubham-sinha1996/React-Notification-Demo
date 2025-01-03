import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./Notification";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <App text="All databases will be upgraded to support the latest features on Sunday. Please ensure you have a backup of your data." />
);
