import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { MobileEpisodesContextProvider } from "./store/mobile-episodes-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <MobileEpisodesContextProvider>
    <App />
  </MobileEpisodesContextProvider>
);
