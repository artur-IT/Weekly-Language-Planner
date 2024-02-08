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
      // summaryOneDayTime(localStoreId.day, localStoreId.time);
      ReactDOM.createRoot(el).render(<ShowTask taskValues={localStoreId} />);
    } else null;
  }
};

let dayTimes = [
  { day: "Monday", time: 0 },
  { day: "Tuesday", time: 0 },
  { day: "Wednesday", time: 0 },
  { day: "Thursday", time: 0 },
  { day: "Friday", time: 0 },
  { day: "Saturday", time: 0 },
  { day: "Sunday", time: 0 },
];

// SUMMARY ALL TASKS PLANNED TIME FROM ONE-DAY
const summaryOneDayTime = (day, time) => {
  // console.log(day, time);
  dayTimes.forEach((item) => {
    console.log(item.day);
  });
  // ReactDOM.createRoot(document.querySelector(".monday_sum_time")).render(<p>{time}</p>);
};
summaryOneDayTime();

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
    <div className="zero"></div>
    <div className="monnday">
      <p className="center_text">Monday</p>
    </div>
    <div className="tuesday">
      <p className="center_text">Tuesday</p>
    </div>
    <div className="wednesday">
      <p className="center_text">Wednesday</p>
    </div>
    <div className="thursday">
      <p className="center_text">Thursday</p>
    </div>
    <div className="friday">
      <p className="center_text">Friday</p>
    </div>
    <div className="saturday">
      <p className="center_text">Saturday</p>
    </div>
    <div className="sunday">
      <p className="center_text">Sunday</p>
    </div>
    <div className="habit_sum">
      <p className="center_text">Habit time</p>
    </div>
    <div className="habit1">
      <p className="center_text">SPEAKING</p>
    </div>
    <div className="habit2">
      <p className="center_text">READING</p>
    </div>
    <div className="habit3">
      <p className="center_text">WRITING</p>
    </div>
    <div className="habit4">
      <p className="center_text">LISTENING</p>
    </div>
    <div className="habit5">
      <p className="center_text">VOCABULARY</p>
    </div>

    <div className="plannded_time">
      <p className="center_text">Planned time:</p>
    </div>
    <div className="time_done">
      <p className="center_text">My Realy Time:</p>
    </div>

    <div className="empty" name="monday-SPEAKING"></div>
    <div className="empty" name="tuesday-SPEAKING"></div>
    <div className="empty" name="wednesday-SPEAKING"></div>
    <div className="empty" name="thursday-SPEAKING"></div>
    <div className="empty" name="friday-SPEAKING"></div>
    <div className="empty" name="saturday-SPEAKING"></div>
    <div className="empty" name="sunday-SPEAKING"></div>
    <div className="habit_sum_bgc">
      <p className="center_text"></p>
    </div>
    <div className="empty" name="monday-READING"></div>
    <div className="empty" name="tuesday-READING"></div>
    <div className="empty" name="wednesday-READING"></div>
    <div className="empty" name="thursday-READING"></div>
    <div className="empty" name="friday-READING"></div>
    <div className="empty" name="saturday-READING"></div>
    <div className="empty" name="sunday-READING"></div>
    <div className="habit_sum_bgc">
      <p className="center_text"></p>
    </div>
    <div className="empty" name="monday-WRITING"></div>
    <div className="empty" name="tuesday-WRITING"></div>
    <div className="empty" name="wednesday-WRITING"></div>
    <div className="empty" name="thursday-WRITING"></div>
    <div className="empty" name="friday-WRITING"></div>
    <div className="empty" name="saturday-WRITING"></div>
    <div className="empty" name="sunday-WRITING"></div>
    <div className="habit_sum_bgc">
      <p className="center_text"></p>
    </div>
    <div className="empty" name="monday-LISTENING"></div>
    <div className="empty" name="tuesday-LISTENING"></div>
    <div className="empty" name="wednesday-LISTENING"></div>
    <div className="empty" name="thursday-LISTENING"></div>
    <div className="empty" name="friday-LISTENING"></div>
    <div className="empty" name="saturday-LISTENING"></div>
    <div className="empty" name="sunday-LISTENING"></div>
    <div className="habit_sum_bgc">
      <p className="center_text"></p>
    </div>
    <div className="empty" name="monday-VOCABULARY"></div>
    <div className="empty" name="tuesday-VOCABULARY"></div>
    <div className="empty" name="wednesday-VOCABULARY"></div>
    <div className="empty" name="thursday-VOCABULARY"></div>
    <div className="empty" name="friday-VOCABULARY"></div>
    <div className="empty" name="saturday-VOCABULARY"></div>
    <div className="empty" name="sunday-VOCABULARY"></div>
    <div className="habit_sum_bgc">
      <p className="center_text"></p>
    </div>
    <div className="monday_sum_time">0</div>
    <div className="tuesday_sum_time">0</div>
    <div className="wednesday_sum_time">0</div>
    <div className="thursday_sum_time">0</div>
    <div className="friday_sum_time">0</div>
    <div className="saturday_sum_time">0</div>
    <div className="sunday_sum_time">0</div>
    <div className="habit_sum_bgc">
      <p className="center_text">0</p>
    </div>
    <div className="real_time">-</div>
    <div className="real_time">-</div>
    <div className="real_time">-</div>
    <div className="real_time">-</div>
    <div className="real_time">-</div>
    <div className="real_time">-</div>
    <div className="real_time">-</div>
    <div className="habit_sum_bgc">
      <p className="center_text">-</p>
    </div>
  </section>
);

setTimeout(() => {
  document.querySelector("button.add_form").onclick = addTaskFromUser;
  document.querySelector("button.remove_top").onclick = clearAllTasks;
  // GET ALL TASKS FROM LocalStore
  getAllTasks();
}, 200);
