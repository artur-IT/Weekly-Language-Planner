import { useRef } from "react";

const Header = () => {
  const myRef = useRef();

  const showTaskBar = () => {
    const addBar = document.querySelector(".task_fields");
    // const tasksGrid = document.querySelector(".layout");

    if (addBar.classList.contains("show_task_bar")) {
      addBar.classList.remove("show_task_bar");
      addBar.classList.add("hide_task_bar");
    } else if (addBar.classList.contains("hide_task_bar")) {
      addBar.classList.remove("hide_task_bar");
      addBar.classList.toggle("show_task_bar");
    }
  };

  return (
    <>
      <h2>Weekly Language Planner</h2>
      <div className="two-buttons-top">
        <button className="add_top" onClick={showTaskBar} ref={myRef}>
          Add Task
        </button>
        <button className="remove_top">Clear All</button>
      </div>
    </>
  );
};

export default Header;
