require("file-loader?name=[name].[ext]!./index.html");
import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import "./App.css";

function AppWithCallbackAfterRender() {
  useEffect(() => {
    console.log("rendered");
  });

  return <App tab="home" />;
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<AppWithCallbackAfterRender />);
