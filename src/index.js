import React from "react";
import ReactDOM from "react-dom/client";

import Cursor from "./components/Cursor";

import App from "./App";
import reportWebVitals from "./reportWebVitals";

import "swiper/css";

import "./assets/styles/bootstrap.css";
import "./assets/styles/corzo-style.css";
import "./assets/styles/corzo-core-style.css";
import "./assets/styles/page-build.css";
import "./assets/styles/r6.css";
import "./assets/styles/custom.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <Cursor />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
