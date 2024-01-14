import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import MaterialBasic from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="title">
      <h1 className="main-heading">Vertical.io</h1>
      <h2>Generate <b>Vertical</b> Text Online</h2>
    </div>
    <App />
    <div className="footer">
      <a href="https://github.com/asparagusv/VerticalTextGenerator" target="_blank">
        <img src="github-mark.png" alt="" height="23px"/>
        <span>GitHub</span>
      </a>
    </div>
  </React.StrictMode>
);
