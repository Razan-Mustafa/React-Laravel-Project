// index.js or App.js
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom"; // Import BrowserRouter
import App from "./App";

ReactDOM.render(
  <Router>
    {" "}
    {/* Wrap your App with BrowserRouter */}
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>,
  document.getElementById("root")
);
