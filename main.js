// import ShowTask from "./components/ShowTask.jsx";

// SHOW 1 TASK FROM LocalStorage
const ShowTask = ({ taskValues }) => {
  if (!taskValues) return;
  else
    return (
      <div>
        <p>{taskValues.name}</p>
        <p>{taskValues.time} min.</p>
      </div>
    );
};

// R.COMPONENT - ADD TASK SECTION
const AddTaskSection = () => {
  return (
    <form action="">
      <label>Day:</label>
      <select className="day_task" name="day-task">
        <option>Monday</option>
        <option>Tuesday</option>
        <option>Wednesday</option>
        <option>Thursday</option>
        <option>Friday</option>
        <option>Saturday</option>
        <option>Sunday</option>
      </select>
      <label>Study:</label>
      <select className="study" name="study-name">
        <option>SPEAKING</option>
        <option>READING</option>
        <option>WRITING</option>
        <option>LISTENING</option>
        <option>VOCABULARY</option>
      </select>
      <label>Task name:</label>
      <input className="task_name" name="task-name" type="text" placeholder="task name..." />
      <label>Task time:</label>
      <input className="task_time" type="number" id="exercise_time" step="5" min="0" max="60" placeholder="max. 60" /> min.
      <button className="add_form">Dodaj</button>
    </form>
  );
};

// SEARCH EMPTY BOXES AND COMPARE WITH LocalStore
const getAllTasks = () => {
  const emptyBoxes = document.querySelectorAll(".empty");

  for (const el of emptyBoxes) {
    // get box name from DOM
    const emptyBoxName = el.attributes.name.nodeValue;
    const localStoreId = JSON.parse(localStorage.getItem(emptyBoxName));
    const empty = ReactDOM.createRoot(el);

    // show all task's from LocalStore to empty boxes
    if (localStoreId) {
      empty.render(<ShowTask taskValues={localStoreId} />);
    } else empty.render(<ShowTask taskValues={localStoreId} />);
  }
};

const x = (taskValues) => {
  return <ShowTask taskValues={taskValues} />;
};

// OBJECT FOR NEW TASK FROM USER
class TaskBox {
  constructor(id, date_add, day, study, name, time) {
    this.id = id;
    this.date_add = date_add;
    this.day = day;
    this.study = study;
    this.name = name;
    this.time = time;
  }
}

// GET NEW TASK FROM USER AND SAVE TO LocalStorage
const addTaskFromUser = (e) => {
  e.preventDefault();
  const myDay = document.querySelector(".day_task");
  const myStudy = document.querySelector(".study");
  const myTask = document.querySelector(".task_name");
  const myTime = document.querySelector(".task_time");
  const id = myDay.value.toLocaleLowerCase() + "-" + myStudy.value;
  const date_add = new Date().toLocaleDateString("pl-PL");

  if (myDay.value && myStudy.value && myTask.value && myTime.value && myTime.value != 0) {
    const newTask = new TaskBox(id, date_add, myDay.value, myStudy.value, myTask.value, myTime.value);
    window.localStorage.setItem(id, JSON.stringify(newTask));
  } else alert("Uzupełnij pola!");

  myDay.value = myStudy.value = myTask.value = myTime.value = null;
  getAllTasks();
};

// REMOVE ALL TASKS FROM LocalStore
const clearAllTasks = () => {
  localStorage.clear();
  return getAllTasks();
};

// RENDER SECTION 'ADD TASK' FROM USER
ReactDOM.createRoot(document.querySelector("section.task_fields")).render(<AddTaskSection />);

// GET ALL TASKS FROM LocalStore
getAllTasks();

setTimeout(() => {
  document.querySelector("button.add_form").onclick = addTaskFromUser;
  document.querySelector("button.remove_top").onclick = clearAllTasks;
}, 500);
