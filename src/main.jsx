import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import MaterialBasic from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div class="title">
      <h1 class="main-heading">Vertical.io</h1>
      <h2>Generate <b>Vertical</b> Text Online</h2>
    </div>
    <App />
  </React.StrictMode>
);
