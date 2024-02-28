import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import App from "./App..jsx";
import SectionAddTask from "./components/SectionAddTask";

ReactDOM.createRoot(document.querySelector(".wrapper")).render(
  <React.StrictMode>
    <Header />
    <SectionAddTask />
    <App />
  </React.StrictMode>
);
