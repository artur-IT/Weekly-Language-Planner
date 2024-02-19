import ShowTask from "./components/ShowTask";
import Days from "./components/Days";
import Habits from "./components/Habits";
import PlannedTime from "./components/PlannedTime";
import RealTime from "./components/RealTime";
import HabitSumTime from "./components/HabitSumTime";

export function App() {
  let taskArray = [];
  let divNames = [];
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const habits = ["SPEAKING", "READING", "WRITING", "LISTENING", "VOCABULARY"];

  // CREATE ARRAY WITH NAMES (for div): day-HABIT
  const namesForDIV = () => {
    for (let x = 0; x < habits.length; x++) {
      for (let y = 0; y < days.length; y++) {
        const divName = days[y].toLocaleLowerCase() + `-` + habits[x];
        divNames.push(divName);
      }
    }
    return divNames;
  };
  namesForDIV();

  // CREATE TABLE OF ALL TASKS
  const GetAllTasks = () => {
    for (let i = 0; i < 5; i++) {
      taskArray.push(<ShowTask key={i} name={`${divNames[i]}`} />);
    }
    console.log(taskArray);
    return taskArray;
  };

  let habitTimes = [
    { study: "SPEAKING", time: 0 },
    { study: "READING", time: 0 },
    { study: "WRITING", time: 0 },
    { study: "LISTENING", time: 0 },
    { study: "VOCABULARY", time: 0 },
  ];

  // SUMMARY ALL TASKS PLANNED TIME FROM ONE-DAY

  // SUMMARY ONE HABIT TIME FROM ALL DAYS
  const summaryOneHabitTime = (study, time) => {
    habitTimes.forEach((item) => (item.study === study ? (item.time += Number(time)) : null));
    // console.log(study, time);
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
      this.active = false;
    }
  }

  // GET NEW TASK FROM USER AND SAVE TO LocalStorage
  const addTaskFromUser = (e) => {
    e.preventDefault();

    // reset oneDaySum and oneHabitSum time
    // dayTimes.forEach((item) => (item.time = 0));
    habitTimes.forEach((item) => (item.time = 0));

    const myDay = document.querySelector(".day_task");
    const myStudy = document.querySelector(".study");
    const myTask = document.querySelector(".task_name");
    const myTime = document.querySelector(".task_time");
    const id = myDay.value.toLocaleLowerCase() + "-" + myStudy.value;
    const date_add = new Date().toLocaleDateString("pl-PL");

    if (myDay.value && myStudy.value && myTask.value && myTime.value && myTime.value != 0) {
      const newTask = new TaskBox(id, date_add, myDay.value, myStudy.value, myTask.value, myTime.value);

      let myLStasks = localStorage.getItem("myTasks") ? JSON.parse(localStorage.getItem("myTasks")) : [];
      myLStasks.push(newTask);
      localStorage.setItem("myTasks", JSON.stringify(myLStasks));

      // getAllTasks();
      // summaryOneDayTime();
    } else alert("Uzupełnij pola!");

    myDay.value = myStudy.value = myTask.value = myTime.value = null;
  };

  // REMOVE ALL TASKS FROM LocalStore
  const clearAllTasks = () => {
    localStorage.clear();
    return GetAllTasks();
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

    // summaryOneDayTime();
    summaryOneHabitTime();

    doneTaskHandle();
    removeTaskHandle();
  };

  // ------------HTML COMPONENTS - Structure-------------

  // const MyTaskTable = () => {
  //   return (
  //     <>
  //       <div className="empty" name="monday-SPEAKING"></div>
  //       <div className="empty" name="tuesday-SPEAKING"></div>
  //       <div className="empty" name="wednesday-SPEAKING"></div>
  //       <div className="empty" name="thursday-SPEAKING"></div>
  //       <div className="empty" name="friday-SPEAKING"></div>
  //       <div className="empty" name="saturday-SPEAKING"></div>
  //       <div className="empty" name="sunday-SPEAKING"></div>

  //       <div className="empty" name="monday-READING"></div>
  //       <div className="empty" name="tuesday-READING"></div>
  //       <div className="empty" name="wednesday-READING"></div>
  //       <div className="empty" name="thursday-READING"></div>
  //       <div className="empty" name="friday-READING"></div>
  //       <div className="empty" name="saturday-READING"></div>
  //       <div className="empty" name="sunday-READING"></div>

  //       <div className="empty" name="monday-WRITING"></div>
  //       <div className="empty" name="tuesday-WRITING"></div>
  //       <div className="empty" name="wednesday-WRITING"></div>
  //       <div className="empty" name="thursday-WRITING"></div>
  //       <div className="empty" name="friday-WRITING"></div>
  //       <div className="empty" name="saturday-WRITING"></div>
  //       <div className="empty" name="sunday-WRITING"></div>

  //       <div className="empty" name="monday-LISTENING"></div>
  //       <div className="empty" name="tuesday-LISTENING"></div>
  //       <div className="empty" name="wednesday-LISTENING"></div>
  //       <div className="empty" name="thursday-LISTENING"></div>
  //       <div className="empty" name="friday-LISTENING"></div>
  //       <div className="empty" name="saturday-LISTENING"></div>
  //       <div className="empty" name="sunday-LISTENING"></div>

  //       <div className="empty" name="monday-VOCABULARY"></div>
  //       <div className="empty" name="tuesday-VOCABULARY"></div>
  //       <div className="empty" name="wednesday-VOCABULARY"></div>
  //       <div className="empty" name="thursday-VOCABULARY"></div>
  //       <div className="empty" name="friday-VOCABULARY"></div>
  //       <div className="empty" name="saturday-VOCABULARY"></div>
  //       <div className="empty" name="sunday-VOCABULARY"></div>
  //     </>
  //   );
  // };

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
      <Days daysNames={days} />
      <Habits habitsNames={habits} />

      <GetAllTasks />

      <HabitSumTime />

      <SummaryDaysTimes />
    </section>
  );
}

export default App;
