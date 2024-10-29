import { useState } from "react";
import PropTypes from "prop-types";

const Header = ({ updateStore, switchPL }) => {
  const [isTaskBarVisible, setIsTaskBarVisible] = useState(false);

  const showTaskBar = () => {
    const addBar = document.querySelector(".task_fields");
    setIsTaskBarVisible(!isTaskBarVisible);

    if (addBar) {
      if (isTaskBarVisible) {
        addBar.classList.remove("show_task_bar");
        addBar.classList.add("hide_task_bar");
      } else {
        addBar.classList.remove("hide_task_bar");
        addBar.classList.add("show_task_bar");
      }
    }
  };

  const clearAllTasks = () => {
    if (window.confirm("Are you sure? \nDelete all tasks?")) {
      updateStore([]); // Używamy bezpośrednio setStore z useLocalStorage
    }
  };

  return (
    <div className="header_buttons">
      <h1>{!switchPL ? "Language Learning Planner" : "Planer Nauki Języka"}</h1>
      <button className="add_top" onClick={showTaskBar}>
        {!switchPL ? "ADD TASK" : "DODAJ ZADANIE"}
      </button>
      <button className="remove_top" onClick={clearAllTasks}>
        {!switchPL ? "CLEAR PLAN" : "WYCZYŚĆ PLAN"}
      </button>
    </div>
  );
};

Header.propTypes = {
  store: PropTypes.array.isRequired,
  updateStore: PropTypes.func.isRequired,
  switchPL: PropTypes.bool.isRequired,
};

export default Header;
