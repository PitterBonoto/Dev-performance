import React from "react";
import ReactDOM from "react-dom";
import GlobalStyle from "./globalStyle";
import Login from "./Pages/Login";
import Home from "./Pages/Home"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Login />
    <GlobalStyle />
  </>
);
