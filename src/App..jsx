import { useState } from "react";

import ShowTask from "./components/ShowTask";
import Days from "./components/Days";
import Habits from "./components/Habits";
import PlannedTime from "./components/PlannedTime";
import RealTime from "./components/RealTime";
import HabitSumTime from "./components/HabitSumTime";

export function App() {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const habits = ["SPEAKING", "READING", "WRITING", "LISTENING", "VOCABULARY"];
  const myLocalStore = JSON.parse(localStorage.getItem("myTasks"));
  let taskArray = [];
  let divNames = [];

  const [
    dayTimes = [
      { day: "Monday", time: 0, real_time: 0 },
      { day: "Tuesday", time: 0, real_time: 0 },
      { day: "Wednesday", time: 0, real_time: 0 },
      { day: "Thursday", time: 0, real_time: 0 },
      { day: "Friday", time: 0, real_time: 0 },
      { day: "Saturday", time: 0, real_time: 0 },
      { day: "Sunday", time: 0, real_time: 0 },
    ],
    setDayTimes,
  ] = useState();

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
    taskArray = [];
    for (let i = 0; i < 35; i++) {
      taskArray.push(<ShowTask key={i} name={`${divNames[i]}`} times={dayTimes} />);
    }
    return taskArray;
  };

  // SUMMARY FROM ALL TASKS PLANNED TIME FROM ONE-DAY
  const getOneDayTimes = () => {
    const summaryOneDayTime = (day, time) => {
      dayTimes.forEach((item) => (item.day === day ? (item.time += Number(time)) : null));
      return dayTimes;
    };
    for (const el of myLocalStore) summaryOneDayTime(el.day, el.time);
  };
  getOneDayTimes();

  let habitTimes = [
    { study: "SPEAKING", time: 0 },
    { study: "READING", time: 0 },
    { study: "WRITING", time: 0 },
    { study: "LISTENING", time: 0 },
    { study: "VOCABULARY", time: 0 },
  ];

  // SUMMARY ONE HABIT TIMES FROM ALL DAYS
  const getOneHabitTimes = () => {
    const summaryOneHabitTime = (study, time) => {
      habitTimes.forEach((item) => (item.study === study ? (item.time += Number(time)) : null));
      return habitTimes;
    };
    for (const el of myLocalStore) summaryOneHabitTime(el.study, el.time);
  };
  getOneHabitTimes();

  //------------------------------- ADD SECTION start
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
  //------------------------------- ADD SECTION end

  // -- BTN_DONE HANDLER
  const doneTaskHandle = () => {
    document.querySelectorAll(".btn_done").forEach((btn) =>
      btn.addEventListener("click", (e) => {
        e.target.parentElement.parentElement.classList.toggle("done_task_bgc");
      })
    );
  };
  // -- BTN_REMOVE HANDLER
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

  //-------

  return (
    <section className="layout">
      <Days daysNames={days} />
      <Habits habitsNames={habits} />

      <GetAllTasks />

      <HabitSumTime times={habitTimes} />

      <PlannedTime times={dayTimes} />
      <RealTime times={dayTimes} />
    </section>
  );
}

export default App;
