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

// R.COMPONENT - ADD TASK SECTION TO DOM
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

    // show all task's from LocalStore to empty boxes
    if (localStoreId) {
      // <SummaryOneDayTime study={localStoreId.study} time={localStoreId.time} />;
      // SummaryOneDayTime(localStoreId.day, localStoreId.time);
      ReactDOM.createRoot(el).render(<ShowTask taskValues={localStoreId} />);
    } else null;
  }
};

let dayTimes = [
  { Monday: { study: "", time: 0 } },
  { Tuesday: { study: "", time: 0 } },
  { Wednesday: { study: "", time: 0 } },
  { Thursday: { study: "", time: 0 } },
  { Friday: { study: "", time: 0 } },
  { Saturday: { study: "", time: 0 } },
  { Sunday: { study: "", time: 0 } },
];

// SUMMARY ALL TASKS PLANNED TIME FROM ONE-DAY
const SummaryOneDayTime = (study, time) => {
  // console.log(study, time);
  ReactDOM.createRoot(document.querySelector(".monday_sum_time")).render(<p>{time}</p>);
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
    getAllTasks();
  } else alert("Uzupełnij pola!");

  myDay.value = myStudy.value = myTask.value = myTime.value = null;
};

// REMOVE ALL TASKS FROM LocalStore
const clearAllTasks = () => {
  localStorage.clear();
  return getAllTasks();
};

// RENDER SECTION 'ADD TASK' FROM USER
ReactDOM.createRoot(document.querySelector("section.task_fields")).render(<AddTaskSection />);
ReactDOM.createRoot(document.querySelector(".wrapper")).render(
  <section className="layout">
    <div class="zero"></div>
    <div class="monnday">
      <p class="center_text">Monday</p>
    </div>
    <div class="tuesday">
      <p class="center_text">Tuesday</p>
    </div>
    <div class="wednesday">
      <p class="center_text">Wednesday</p>
    </div>
    <div class="thursday">
      <p class="center_text">Thursday</p>
    </div>
    <div class="friday">
      <p class="center_text">Friday</p>
    </div>
    <div class="saturday">
      <p class="center_text">Saturday</p>
    </div>
    <div class="sunday">
      <p class="center_text">Sunday</p>
    </div>
    <div class="habit_sum">
      <p class="center_text">Habit time</p>
    </div>
    <div class="habit1">
      <p class="center_text">SPEAKING</p>
    </div>
    <div class="habit2">
      <p class="center_text">READING</p>
    </div>
    <div class="habit3">
      <p class="center_text">WRITING</p>
    </div>
    <div class="habit4">
      <p class="center_text">LISTENING</p>
    </div>
    <div class="habit5">
      <p class="center_text">VOCABULARY</p>
    </div>

    <div class="plannded_time">
      <p class="center_text">Planned time:</p>
    </div>
    <div class="time_done">
      <p class="center_text">My Realy Time:</p>
    </div>

    <div class="empty" name="monday-SPEAKING"></div>
    <div class="empty" name="tuesday-SPEAKING"></div>
    <div class="empty" name="wednesday-SPEAKING"></div>
    <div class="empty" name="thursday-SPEAKING"></div>
    <div class="empty" name="friday-SPEAKING"></div>
    <div class="empty" name="saturday-SPEAKING"></div>
    <div class="empty" name="sunday-SPEAKING"></div>
    <div class="habit_sum_bgc">
      <p class="center_text"></p>
    </div>
    <div class="empty" name="monday-READING"></div>
    <div class="empty" name="tuesday-READING"></div>
    <div class="empty" name="wednesday-READING"></div>
    <div class="empty" name="thursday-READING"></div>
    <div class="empty" name="friday-READING"></div>
    <div class="empty" name="saturday-READING"></div>
    <div class="empty" name="sunday-READING"></div>
    <div class="habit_sum_bgc">
      <p class="center_text"></p>
    </div>
    <div class="empty" name="monday-WRITING"></div>
    <div class="empty" name="tuesday-WRITING"></div>
    <div class="empty" name="wednesday-WRITING"></div>
    <div class="empty" name="thursday-WRITING"></div>
    <div class="empty" name="friday-WRITING"></div>
    <div class="empty" name="saturday-WRITING"></div>
    <div class="empty" name="sunday-WRITING"></div>
    <div class="habit_sum_bgc">
      <p class="center_text"></p>
    </div>
    <div class="empty" name="monday-LISTENING"></div>
    <div class="empty" name="tuesday-LISTENING"></div>
    <div class="empty" name="wednesday-LISTENING"></div>
    <div class="empty" name="thursday-LISTENING"></div>
    <div class="empty" name="friday-LISTENING"></div>
    <div class="empty" name="saturday-LISTENING"></div>
    <div class="empty" name="sunday-LISTENING"></div>
    <div class="habit_sum_bgc">
      <p class="center_text"></p>
    </div>
    <div class="empty" name="monday-VOCABULARY"></div>
    <div class="empty" name="tuesday-VOCABULARY"></div>
    <div class="empty" name="wednesday-VOCABULARY"></div>
    <div class="empty" name="thursday-VOCABULARY"></div>
    <div class="empty" name="friday-VOCABULARY"></div>
    <div class="empty" name="saturday-VOCABULARY"></div>
    <div class="empty" name="sunday-VOCABULARY"></div>
    <div class="habit_sum_bgc">
      <p class="center_text"></p>
    </div>
    <div class="monday_sum_time">0</div>
    <div class="tuesday_sum_time">0</div>
    <div class="wednesday_sum_time">0</div>
    <div class="thursday_sum_time">0</div>
    <div class="friday_sum_time">0</div>
    <div class="saturday_sum_time">0</div>
    <div class="sunday_sum_time">0</div>
    <div class="habit_sum_bgc">
      <p class="center_text">0</p>
    </div>
    <div class="real_time">-</div>
    <div class="real_time">-</div>
    <div class="real_time">-</div>
    <div class="real_time">-</div>
    <div class="real_time">-</div>
    <div class="real_time">-</div>
    <div class="real_time">-</div>
    <div class="habit_sum_bgc">
      <p class="center_text">-</p>
    </div>
  </section>
);

// GET ALL TASKS FROM LocalStore
getAllTasks();

setTimeout(() => {
  document.querySelector("button.add_form").onclick = addTaskFromUser;
  document.querySelector("button.remove_top").onclick = clearAllTasks;
}, 500);
