// import ReactDOM from "react-dom/client";
import ShowTask from "./components/ShowTask";

export function App() {
  // SEARCH EMPTY BOXES AND COMPARE WITH LocalStore
  const GetAllTasks = () => {
    const emptyBoxes = document.querySelectorAll(".empty");
    // console.log(emptyBoxes);

    emptyBoxes.forEach((el) => {
      const emptyBoxName = el.attributes.name.nodeValue;
      const localStoreId = JSON.parse(localStorage.getItem(emptyBoxName));
      // return (
      //   <>
      //     <ShowTask taskValues={localStoreId} />;
      //   </>
      // );
      // el.textContent = "lis";
      // show all task's from LocalStore to empty boxes
      if (localStoreId) {
        summaryOneDayTime(localStoreId.day, localStoreId.time);
        // summaryOneHabitTime(localStoreId.study, localStoreId.time);
        // ReactDOM.createRoot(el).render(<ShowTask taskValues={localStoreId} />);

        <ShowTask taskValues={localStoreId} />;
        // return ShowTask(localStoreId.emptyBoxName);
      } else null;
    });
  };

  let dayTimes = [
    { day: "Monday", time: 0, real_time: 0 },
    { day: "Tuesday", time: 0, real_time: 0 },
    { day: "Wednesday", time: 0, real_time: 0 },
    { day: "Thursday", time: 0, real_time: 0 },
    { day: "Friday", time: 0, real_time: 0 },
    { day: "Saturday", time: 0, real_time: 0 },
    { day: "Sunday", time: 0, real_time: 0 },
  ];

  let habitTimes = [
    { study: "SPEAKING", time: 0 },
    { study: "READING", time: 0 },
    { study: "WRITING", time: 0 },
    { study: "LISTENING", time: 0 },
    { study: "VOCABULARY", time: 0 },
  ];

  // SUMMARY ALL TASKS PLANNED TIME FROM ONE-DAY
  const summaryOneDayTime = (day, time) => {
    dayTimes.forEach((item) => (item.day === day ? (item.time += Number(time)) : null));

    document.querySelector(".monday_sum_time").textContent = `${dayTimes[0].time} min.`;
    document.querySelector(".tuesday_sum_time").textContent = `${dayTimes[1].time} min.`;
    document.querySelector(".wednesday_sum_time").textContent = `${dayTimes[2].time} min.`;
    document.querySelector(".thursday_sum_time").textContent = `${dayTimes[3].time} min.`;
    document.querySelector(".friday_sum_time").textContent = `${dayTimes[4].time} min.`;
    document.querySelector(".saturday_sum_time").textContent = `${dayTimes[5].time} min.`;
    document.querySelector(".sunday_sum_time").textContent = `${dayTimes[6].time} min.`;
  };

  // SUMMARY ONE HABIT TIME FROM ALL DAYS
  const summaryOneHabitTime = (study, time) => {
    habitTimes.forEach((item) => (item.study === study ? (item.time += Number(time)) : null));

    document.querySelector(".habit1_sum p").textContent = `${habitTimes[0].time} min.`;
    document.querySelector(".habit2_sum p").textContent = `${habitTimes[1].time} min.`;
    document.querySelector(".habit3_sum p").textContent = `${habitTimes[2].time} min.`;
    document.querySelector(".habit4_sum p").textContent = `${habitTimes[3].time} min.`;
    document.querySelector(".habit5_sum p").textContent = `${habitTimes[4].time} min.`;
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
      this.done = false;
    }
  }

  // GET NEW TASK FROM USER AND SAVE TO LocalStorage
  const addTaskFromUser = (e) => {
    e.preventDefault();

    // reset oneDaySum and oneHabitSum time
    dayTimes.forEach((item) => (item.time = 0));
    habitTimes.forEach((item) => (item.time = 0));

    const myDay = document.querySelector(".day_task");
    const myStudy = document.querySelector(".study");
    const myTask = document.querySelector(".task_name");
    const myTime = document.querySelector(".task_time");
    const id = myDay.value.toLocaleLowerCase() + "-" + myStudy.value;
    const date_add = new Date().toLocaleDateString("pl-PL");

    if (myDay.value && myStudy.value && myTask.value && myTime.value && myTime.value != 0) {
      const newTask = new TaskBox(id, date_add, myDay.value, myStudy.value, myTask.value, myTime.value);
      localStorage.setItem(id, JSON.stringify(newTask));

      getAllTasks();
      summaryOneDayTime();
    } else alert("Uzupełnij pola!");

    myDay.value = myStudy.value = myTask.value = myTime.value = null;
  };

  // REMOVE ALL TASKS FROM LocalStore
  const clearAllTasks = () => {
    localStorage.clear();
    return getAllTasks();
  };

  // ----- BTN_DONE HANDLER
  const doneTaskHandle = () => {
    document.querySelectorAll(".btn_done").forEach((btn) =>
      btn.addEventListener("click", (e) => {
        e.target.parentElement.parentElement.classList.toggle("done_task_bgc");
      })
    );
  };

  // ----- BTN_REMOVE HANDLER
  const removeTaskHandle = () => {
    document.querySelectorAll(".btn_remove").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const taskName = e.target.parentElement.parentElement.attributes.name.nodeValue;
        const localStoreId = JSON.parse(localStorage.getItem(taskName));
        taskName === localStoreId.id ? localStorage.removeItem(taskName) : null;
      });
    });
  };

  window.onload = () => {
    document.querySelector("button.add_form").onclick = addTaskFromUser;
    document.querySelector("button.remove_top").onclick = clearAllTasks;
    // GET ALL TASKS FROM LocalStore
    GetAllTasks();

    summaryOneDayTime();
    // summaryOneHabitTime();

    doneTaskHandle();
    removeTaskHandle();
  };

  // ------------HTML COMPONENTS - Structure-------------
  const DaysNames = () => {
    return (
      <>
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
      </>
    );
  };

  const HabitsNames = () => {
    return (
      <>
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
      </>
    );
  };

  const OneHabitSumTime = () => {
    return (
      <>
        <div className="habit1_sum">
          <p className="center_text"></p>
        </div>

        <div className="habit2_sum">
          <p className="center_text"></p>
        </div>

        <div className="habit3_sum">
          <p className="center_text"></p>
        </div>

        <div className="habit4_sum">
          <p className="center_text"></p>
        </div>

        <div className="habit5_sum">
          <p className="center_text"></p>
        </div>
      </>
    );
  };

  const MyTaskTable = () => {
    return (
      <>
        <div className="empty" name="monday-SPEAKING"></div>
        <div className="empty" name="tuesday-SPEAKING"></div>
        <div className="empty" name="wednesday-SPEAKING"></div>
        <div className="empty" name="thursday-SPEAKING"></div>
        <div className="empty" name="friday-SPEAKING"></div>
        <div className="empty" name="saturday-SPEAKING"></div>
        <div className="empty" name="sunday-SPEAKING"></div>
        {/* <div className="habit1_sum">
          <p className="center_text"></p>
        </div> */}
        <div className="empty" name="monday-READING"></div>
        <div className="empty" name="tuesday-READING"></div>
        <div className="empty" name="wednesday-READING"></div>
        <div className="empty" name="thursday-READING"></div>
        <div className="empty" name="friday-READING"></div>
        <div className="empty" name="saturday-READING"></div>
        <div className="empty" name="sunday-READING"></div>
        {/* <div className="habit2_sum">
          <p className="center_text"></p>
        </div> */}
        <div className="empty" name="monday-WRITING"></div>
        <div className="empty" name="tuesday-WRITING"></div>
        <div className="empty" name="wednesday-WRITING"></div>
        <div className="empty" name="thursday-WRITING"></div>
        <div className="empty" name="friday-WRITING"></div>
        <div className="empty" name="saturday-WRITING"></div>
        <div className="empty" name="sunday-WRITING"></div>
        {/* <div className="habit3_sum">
          <p className="center_text"></p>
        </div> */}
        <div className="empty" name="monday-LISTENING"></div>
        <div className="empty" name="tuesday-LISTENING"></div>
        <div className="empty" name="wednesday-LISTENING"></div>
        <div className="empty" name="thursday-LISTENING"></div>
        <div className="empty" name="friday-LISTENING"></div>
        <div className="empty" name="saturday-LISTENING"></div>
        <div className="empty" name="sunday-LISTENING"></div>
        {/* <div className="habit4_sum">
          <p className="center_text"></p>
        </div> */}
        <div className="empty" name="monday-VOCABULARY"></div>
        <div className="empty" name="tuesday-VOCABULARY"></div>
        <div className="empty" name="wednesday-VOCABULARY"></div>
        <div className="empty" name="thursday-VOCABULARY"></div>
        <div className="empty" name="friday-VOCABULARY"></div>
        <div className="empty" name="saturday-VOCABULARY"></div>
        <div className="empty" name="sunday-VOCABULARY"></div>
        {/* <div className="habit5_sum">
          <p className="center_text"></p>
        </div> */}
      </>
    );
  };

  const SummaryDaysTimes = () => {
    return (
      <>
        <div className="plannded_time">
          <p className="center_text">Planned time:</p>
        </div>
        <div className="time_done">
          <p className="center_text">My real time:</p>
        </div>

        <div className="monday_sum_time"></div>
        <div className="tuesday_sum_time"></div>
        <div className="wednesday_sum_time"></div>
        <div className="thursday_sum_time"></div>
        <div className="friday_sum_time"></div>
        <div className="saturday_sum_time"></div>
        <div className="sunday_sum_time"></div>
        <div className="habit_sum_bgc"></div>
        <div className="monday_real_time">-</div>
        <div className="tuesday_real_time">-</div>
        <div className="wednesday_real_time">-</div>
        <div className="thursday_real_time">-</div>
        <div className="friday_real_time">-</div>
        <div className="saturday_real_time">-</div>
        <div className="sunday_real_time">-</div>
        <div className="habit_sum_bgc"></div>
      </>
    );
  };

  return (
    <section className="layout">
      <DaysNames />

      <HabitsNames />

      <MyTaskTable />
      <OneHabitSumTime />

      <SummaryDaysTimes />
    </section>
  );
}
export default App;
