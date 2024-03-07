/* eslint-disable react/prop-types */
const Header = (props) => {
  const showTaskBar = () => {
    const addBar = document.querySelector(".task_fields");

    if (addBar.classList.contains("show_task_bar")) {
      addBar.classList.remove("show_task_bar");
      addBar.classList.toggle("hide_task_bar");
    } else if (addBar.classList.contains("hide_task_bar")) {
      addBar.classList.remove("hide_task_bar");
      addBar.classList.toggle("show_task_bar");
    } else addBar.classList.add("show_task_bar");
  };

  // REMOVE ALL TASKS FROM LocalStore
  const clearAllTasks = () => {
    localStorage.removeItem("myTasks");
    props.updateStore();
  };

  return (
    <>
      <h1> {!props.store.switchPL ? "Weekly Language Planner" : "Tygodniowy planner językowy"}</h1>
      <button className="add_top" onClick={showTaskBar}>
        {!props.store.switchPL ? "ADD TASK" : "DODAJ ZADANIE"}
      </button>
      <button className="remove_top" onClick={clearAllTasks}>
        {!props.store.switchPL ? "CLEAR PLAN" : "WYCZYŚĆ PLAN"}
      </button>
    </>
  );
};

export default Header;
