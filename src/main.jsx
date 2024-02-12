import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App..jsx";
import AddTaskSection from "./components/AddTaskSection";

ReactDOM.createRoot(document.querySelector(".wrapper")).render(
  <React.StrictMode>
    <AddTaskSection />
    <App />
  </React.StrictMode>
);
