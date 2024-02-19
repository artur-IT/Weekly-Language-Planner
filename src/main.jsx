import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App..jsx";
import SectionAddTask from "./components/SectionAddTask";

ReactDOM.createRoot(document.querySelector(".wrapper")).render(
  <React.StrictMode>
    <SectionAddTask />
    <App />
  </React.StrictMode>
);
