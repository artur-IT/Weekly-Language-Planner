// import ShowTask from "./components/ShowTask.jsx";

// KOMPONENT wyświetla zadanie z LocalStorage
const ShowTask = ({ taskValues }) => {
  return (
    <div>
      <p>{taskValues.name}</p>
      <p>{taskValues.time} min.</p>
    </div>
  );
};

// R.COMPONENT - ADD TASK SECTION
const addTaskSection = () => {
  return (
    <section>
      <section class="task_fields">
        <form action="">
          <label>Day:</label>
          <select class="day_task" name="day-task">
            <option>Monday</option>
            <option>Tuesday</option>
            <option>Wednesday</option>
            <option>Thursday</option>
            <option>Friday</option>
            <option>Saturday</option>
            <option>Sunday</option>
          </select>
          <label>Study:</label>
          <select class="study" name="study-name">
            <option>SPEAKING</option>
            <option>READING</option>
            <option>WRITING</option>
            <option>LISTENING</option>
            <option>VOCABULARY</option>
          </select>
          <label>Task name:</label>
          <input class="task_name" name="task-name" type="text" placeholder="task name..." />
          <label>Task time:</label>
          <input class="task_time" type="number" id="exercise_time" step="5" min="0" max="60" placeholder="max. 60" /> min.
          <button>Dodaj</button>
        </form>
      </section>
    </section>
  );
};

// SEARCH EMPTY BOXES AND COMPARE WITH LocalStore
const getAllTasksBox = () => {
  const emptyBoxes = document.querySelectorAll(".empty");

  for (const el of emptyBoxes) {
    // get box name from DOM
    const emptyBoxName = el.attributes.name.nodeValue;
    const localStoreId = JSON.parse(localStorage.getItem(emptyBoxName));

    // show all task's from LocalStore to empty boxes
    if (localStoreId) {
      el.style.backgroundColor = "yellow";
      const empty = ReactDOM.createRoot(el);
      empty.render(<ShowTask taskValues={localStoreId} />);
    }
  }
};

// OPBJECT FOR NEW TASK FROM USER
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
const getTaskFromUser = (e) => {
  e.preventDefault();
  const myDay = document.querySelector(".day_task");
  const myStudy = document.querySelector(".study");
  const myTask = document.querySelector(".task_name");
  const myTime = document.querySelector(".task_time");
  const id = myDay.value.toLocaleLowerCase() + "-" + myStudy.value;
  const date_add = new Date().toLocaleDateString("pl-PL");

  const newTask = new TaskBox(id, date_add, myDay.value, myStudy.value, myTask.value, myTime.value);
  window.localStorage.setItem(id, JSON.stringify(newTask));

  myDay.value = myStudy.value = myTask.value = myTime.value = null;
  getAllTasksBox();
};

document.querySelector("button").onclick = getTaskFromUser;
getAllTasksBox();
