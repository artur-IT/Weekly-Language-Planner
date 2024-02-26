import { useRef } from "react";

const Header = () => {
  const myRef = useRef();

  const showTaskBar = () => {
    const addBar = document.querySelector(".task_fields");
    addBar.classList.toggle("show_task_bar");
  };

  return (
    <>
      <h2>Weekly Language Planner</h2>
      <button className="add_top" onClick={showTaskBar} ref={myRef}>
        Add Task
      </button>
      <button className="remove_top">Clear All</button>
    </>
  );
};

export default Header;
