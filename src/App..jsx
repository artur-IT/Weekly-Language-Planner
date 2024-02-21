import { Component, useState } from "react";

import ShowTask from "./components/ShowTask";
import Days from "./components/Days";
import Habits from "./components/Habits";
import PlannedTime from "./components/PlannedTime";
import RealTime from "./components/RealTime";
import HabitSumTime from "./components/HabitSumTime";

export class App extends Component {
  constructor() {
    super();

    let myLocalStore = localStorage.getItem("myTasks") ? JSON.parse(localStorage.getItem("myTasks")) : [];

    this.state = {
      store: myLocalStore,
    };

    this.days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    this.habits = ["SPEAKING", "READING", "WRITING", "LISTENING", "VOCABULARY"];
    this.taskArray = [];
    this.divNames = [];

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
  }

  dayTimes = [
    { day: "Monday", time: 0, real_time: 0 },
    { day: "Tuesday", time: 0, real_time: 0 },
    { day: "Wednesday", time: 0, real_time: 0 },
    { day: "Thursday", time: 0, real_time: 0 },
    { day: "Friday", time: 0, real_time: 0 },
    { day: "Saturday", time: 0, real_time: 0 },
    { day: "Sunday", time: 0, real_time: 0 },
  ];

  habitTimes = [
    { study: "SPEAKING", time: 0 },
    { study: "READING", time: 0 },
    { study: "WRITING", time: 0 },
    { study: "LISTENING", time: 0 },
    { study: "VOCABULARY", time: 0 },
  ];

  // CREATE ARRAY WITH NAMES (for div): day-HABIT
  namesForDIV = () => {
    for (let x = 0; x < this.habits.length; x++) {
      for (let y = 0; y < this.days.length; y++) {
        const divName = this.days[y].toLocaleLowerCase() + `-` + this.habits[x];
        this.divNames.push(divName);
      }
    }
    return this.divNames;
  };

  // CREATE TABLE OF ALL TASKS
  GetAllTasks = () => {
    taskArray = [];
    for (let i = 0; i < 35; i++) {
      taskArray.push(<ShowTask key={i} name={`${divNames[i]}`} times={dayTimes} store={myLocalStore} />);
    }
    return taskArray;
  };

  // SUMMARY FROM ALL TASKS PLANNED TIME FROM ONE-DAY
  getOneDayTimes = () => {
    const summaryOneDayTime = (day, time) => {
      this.dayTimes.forEach((item) => (item.day === day ? (item.time += Number(time)) : null));
      return this.dayTimes;
    };
    if (this.myLocalStore) for (const el of this.myLocalStore) summaryOneDayTime(el.day, el.time);
    else null;
  };

  // SUMMARY ONE HABIT TIMES FROM ALL DAYS
  getOneHabitTimes = () => {
    const summaryOneHabitTime = (study, time) => {
      this.habitTimes.forEach((item) => (item.study === study ? (item.time += Number(time)) : null));
      return this.habitTimes;
    };
    if (this.myLocalStore) for (const el of this.myLocalStore) summaryOneHabitTime(el.study, el.time);
    else null;
  };

  //------------------------------- ADD SECTION start
  // OBJECT FOR NEW TASK FROM USER

  // GET NEW TASK FROM USER AND SAVE TO LocalStorage
  addTaskFromUser = (e) => {
    e.preventDefault();
    const myDay = document.querySelector(".day_task");
    const myStudy = document.querySelector(".study");
    const myTask = document.querySelector(".task_name");
    const myTime = document.querySelector(".task_time");
    const id = myDay.value.toLocaleLowerCase() + "-" + myStudy.value;
    const date_add = new Date().toLocaleDateString("pl-PL");

    if (myDay.value && myStudy.value && myTask.value && myTime.value != 0) {
      const newTask = new TaskBox(id, date_add, myDay.value, myStudy.value, myTask.value, myTime.value);

      let myLStasks = localStorage.getItem("myTasks") ? JSON.parse(localStorage.getItem("myTasks")) : [];

      // if (myLStasks.length !== 0) {
      //   for (const el of myLStasks) {
      //     if (id === el.id) {
      //       // console.log(id, el.id);
      //       return alert("Usuń najpierw poprzedni wpis");
      //     } else myLStasks.push(newTask);
      //   }
      // } else

      myLStasks.push(newTask);
      localStorage.setItem("myTasks", JSON.stringify(myLStasks));

      // console.log(tasksStore);
    } else alert("Uzupełnij pola!");

    myDay.value = myStudy.value = myTask.value = myTime.value = null;
    // return myLocalStore;
  };

  // REMOVE ALL TASKS FROM LocalStore
  clearAllTasks = () => {
    localStorage.clear();
    return GetAllTasks();
  };
  //------------------------------- ADD SECTION end

  // -- BTN_DONE HANDLER
  doneTaskHandle = () => {
    document.querySelectorAll(".btn_done").forEach((btn) =>
      btn.addEventListener("click", (e) => {
        e.target.parentElement.parentElement.classList.toggle("done_task_bgc");
      })
    );
  };
  // -- BTN_REMOVE HANDLER
  removeTaskHandle = () => {
    document.querySelectorAll(".btn_remove").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const taskName = e.target.parentElement.parentElement.attributes.name.nodeValue;

        let findTaskIdx = myLocalStore.findIndex((el) => el.id === taskName);
        myLocalStore.splice(findTaskIdx, 1);
        localStorage.setItem("myTasks", JSON.stringify(myLocalStore));
      });
    });
  };

  //-------
  render() {
    {
      // console.log(this.days);
      const planner = new App();
      planner.namesForDIV();
      planner.getOneDayTimes();
      planner.getOneHabitTimes();

      window.onload = () => {
        document.querySelector("button.add_form").onclick = App.addEventListener;
        document.querySelector("button.remove_top").onclick = App.clearAllTasks;

        planner.doneTaskHandle();
        planner.removeTaskHandle();
      };
    }

    return (
      <section className="layout">
        <Days daysNames={this.days} />
        <Habits habitsNames={this.habits} />

        {/* <GetAllTasks /> */}
        <ShowTask name={this.divNames[0]} times={this.dayTimes} store={this.myLocalStore} />
        <ShowTask name={this.divNames[1]} times={this.dayTimes} store={this.myLocalStore} />
        <ShowTask name={this.divNames[2]} times={this.dayTimes} store={this.myLocalStore} />
        <ShowTask name={this.divNames[3]} times={this.dayTimes} store={this.myLocalStore} />
        <ShowTask name={this.divNames[4]} times={this.dayTimes} store={this.myLocalStore} />
        <ShowTask name={this.divNames[5]} times={this.dayTimes} store={this.myLocalStore} />
        <ShowTask name={this.divNames[6]} times={this.dayTimes} store={this.myLocalStore} />
        <ShowTask name={this.divNames[7]} times={this.dayTimes} store={this.myLocalStore} />
        <ShowTask name={this.divNames[8]} times={this.dayTimes} store={this.myLocalStore} />
        <ShowTask name={this.divNames[9]} times={this.dayTimes} store={this.myLocalStore} />

        {/* <ShowTask name={divNames[0]} times={dayTimes} store={myLocalStore} />
      <ShowTask name={divNames[1]} times={dayTimes} store={myLocalStore} />
      <ShowTask name={divNames[2]} times={dayTimes} store={myLocalStore} />
      <ShowTask name={divNames[3]} times={dayTimes} store={myLocalStore} />
      <ShowTask name={divNames[4]} times={dayTimes} store={myLocalStore} />
      <ShowTask name={divNames[0]} times={dayTimes} store={myLocalStore} />
      <ShowTask name={divNames[1]} times={dayTimes} store={myLocalStore} />
      <ShowTask name={divNames[2]} times={dayTimes} store={myLocalStore} />
      <ShowTask name={divNames[3]} times={dayTimes} store={myLocalStore} />
      <ShowTask name={divNames[4]} times={dayTimes} store={myLocalStore} />

      <ShowTask name={divNames[0]} times={dayTimes} store={myLocalStore} />
      <ShowTask name={divNames[1]} times={dayTimes} store={myLocalStore} />
      <ShowTask name={divNames[2]} times={dayTimes} store={myLocalStore} />
      <ShowTask name={divNames[3]} times={dayTimes} store={myLocalStore} />
      <ShowTask name={divNames[4]} times={dayTimes} store={myLocalStore} />
      <ShowTask name={divNames[0]} times={dayTimes} store={myLocalStore} />
      <ShowTask name={divNames[1]} times={dayTimes} store={myLocalStore} />
      <ShowTask name={divNames[2]} times={dayTimes} store={myLocalStore} />
      <ShowTask name={divNames[3]} times={dayTimes} store={myLocalStore} />
      <ShowTask name={divNames[4]} times={dayTimes} store={myLocalStore} />

      <ShowTask name={divNames[0]} times={dayTimes} store={myLocalStore} />
      <ShowTask name={divNames[1]} times={dayTimes} store={myLocalStore} />
      <ShowTask name={divNames[2]} times={dayTimes} store={myLocalStore} />
      <ShowTask name={divNames[3]} times={dayTimes} store={myLocalStore} />
      <ShowTask name={divNames[4]} times={dayTimes} store={myLocalStore} /> */}

        <HabitSumTime times={this.habitTimes} />

        <PlannedTime times={this.dayTimes} />
        <RealTime times={this.dayTimes} />
      </section>
    );
  }
}

export default App;
