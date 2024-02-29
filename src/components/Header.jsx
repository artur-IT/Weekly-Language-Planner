/* eslint-disable react/prop-types */
import { useRef } from "react";

const Header = (props) => {
  let myLocalStore = props.store;
  const myRef = useRef();

  const showTaskBar = () => {
    const addBar = document.querySelector(".task_fields");

    if (addBar.classList.contains("show_task_bar")) {
      addBar.classList.remove("show_task_bar");
      addBar.classList.toggle("hide_task_bar");
    } else if (addBar.classList.contains("hide_task_bar")) {
      addBar.classList.remove("hide_task_bar");
      addBar.classList.toggle("show_task_bar");
    }
    addBar.classList.toggle("show_task_bar");
  };

  // REMOVE ALL TASKS FROM LocalStore
  const clearAllTasks = () => {
    localStorage.clear();
    myLocalStore = [];
    props.updateState(myLocalStore);
  };

  return (
    <>
      <h1> {!props.switch ? "Weekly Language Planner" : "Tygodniowy planner językowy"}</h1>
      <button className="add_top" onClick={showTaskBar} ref={myRef}>
        {!props.switch ? "ADD TASK" : "DODAJ ZADANIE"}
      </button>
      <button className="remove_top" onClick={clearAllTasks}>
        {!props.switch ? "CLEAR PLAN" : "WYCZYŚĆ PLAN"}
      </button>
    </>
  );
};

export default Header;
