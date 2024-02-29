/* eslint-disable react/prop-types */
import { useRef } from "react";

const Header = (props) => {
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

  return (
    <>
      <h1>Weekly Language Planner</h1>
      <button className="add_top" onClick={showTaskBar} ref={myRef}>
        {!props.switch ? "ADD TASK" : "DODAJ ZADANIE"}
      </button>
      <button className="remove_top"> {!props.switch ? "CLEAR ALL" : "WYCZYŚĆ WSZYSTKO"}</button>
    </>
  );
};

export default Header;
