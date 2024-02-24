import { Component } from "react";

import ShowTask from "./components/ShowTask";
import Days from "./components/Days";
import Habits from "./components/Habits";
import PlannedTime from "./components/PlannedTime";
import RealTime from "./components/RealTime";
import HabitSumTime from "./components/HabitSumTime";

export class App extends Component {
  constructor() {
    super();
    this.myLocalStore = localStorage.getItem("myTasks") ? JSON.parse(localStorage.getItem("myTasks")) : new Array();

    this.state = {
      store: this.myLocalStore,
    };

    this.days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    this.habits = ["SPEAKING", "READING", "WRITING", "LISTENING", "VOCABULARY"];
    this.taskArray = [];
    this.divNames = [];

    this.dayTimes = [
      { day: "Monday", time: 0, real_time: 0 },
      { day: "Tuesday", time: 0, real_time: 0 },
      { day: "Wednesday", time: 0, real_time: 0 },
      { day: "Thursday", time: 0, real_time: 0 },
      { day: "Friday", time: 0, real_time: 0 },
      { day: "Saturday", time: 0, real_time: 0 },
      { day: "Sunday", time: 0, real_time: 0 },
    ];
    this.habitTimes = [
      { study: "SPEAKING", time: 0 },
      { study: "READING", time: 0 },
      { study: "WRITING", time: 0 },
      { study: "LISTENING", time: 0 },
      { study: "VOCABULARY", time: 0 },
    ];
  }

  // CREATE ARRAY WITH NAMES for div: 'day-HABIT'
  namesForDIV = () => {
    for (let x = 0; x < this.habits.length; x++) {
      for (let y = 0; y < this.days.length; y++) {
        const divName = this.days[y].toLocaleLowerCase() + `-` + this.habits[x];
        this.divNames.push(divName);
      }
    }
    return;
  };

  // SUMMARY FROM ALL TASKS PLANNED TIME FROM ONE-DAY
  getOneDayTimes = () => {
    this.dayTimes.forEach((item) => (item.time = 0));
    const summaryOneDayTime = (day, time) => {
      this.dayTimes.forEach((item) => (item.day === day ? (item.time += Number(time)) : null));
    };
    for (const el of this.state.store) summaryOneDayTime(el.day, el.time);
  };

  // SUMMARY ONE HABIT TIMES FROM ALL DAYS
  getOneHabitTimes = () => {
    this.habitTimes.forEach((item) => (item.time = 0));
    const summaryOneHabitTime = (study, time) => {
      this.habitTimes.forEach((item) => (item.study === study ? (item.time += Number(time)) : null));
    };
    for (const el of this.state.store) summaryOneHabitTime(el.study, el.time);
  };

  // CHECK CONFLICTS NAMES in LocalStore <=> myLocalstore in App
  checkNameConflict = (taskId) => {
    let flag = false;
    if (this.state.store == []) return flag;

    this.state.store.forEach((el, idx) => {
      if (this.state.store[idx].id === taskId) {
        alert("W tym polu jest już zadanie, usuń je najpierw");
        flag = true;
        return flag;
      }
    });
    return flag;
  };

  // GET NEW TASK FROM USER AND SAVE TO LocalStorage
  addTaskFromUser = (e) => {
    e.preventDefault();
    let myDay = document.querySelector(".day_task").value;
    let myStudy = document.querySelector(".study").value;
    let myTask = document.querySelector(".task_name").value;
    let myTime = document.querySelector(".task_time").value;
    const id = myDay.toLocaleLowerCase() + "-" + myStudy;
    const date_add = new Date().toLocaleDateString("pl-PL");

    // add new task to this.state and LocalStore
    if (myDay && myStudy && myTask && myTime != 0) {
      const test = this.checkNameConflict(`${id}`);
      if (test == false) {
        this.myLocalStore.push({
          id: id,
          date_add: date_add,
          day: myDay,
          study: myStudy,
          name: myTask,
          time: myTime,
          done: false,
          active: false,
        });
        this.setState({ store: this.myLocalStore });
        localStorage.setItem("myTasks", JSON.stringify(this.state.store));
        myDay = myStudy = myTask = myTime = null;
      }
    } else alert("Uzupełnij pola!");
  };

  // REMOVE ALL TASKS FROM LocalStore
  clearAllTasks = () => {
    localStorage.clear();
    this.myLocalStore = [];
    this.setState({ store: this.myLocalStore });
  };

  // -- BTN_DONE HANDLER
  doneTaskHandle = () => {
    document.querySelectorAll(".btn_done").forEach((btn) =>
      btn.addEventListener("click", (e) => {
        e.target.parentElement.parentElement.classList.toggle("done_task_bgc");
      })
    );
  };

  //-------
  render() {
    {
      window.onload = () => {
        document.querySelector("button.add_form").onclick = this.addTaskFromUser;
        document.querySelector("button.remove_top").onclick = this.clearAllTasks;
      };
      this.namesForDIV();
      this.getOneDayTimes();
      this.getOneHabitTimes();
      this.doneTaskHandle();
    }

    return (
      <section className="layout">
        <Days daysNames={this.days} />
        <Habits habitsNames={this.habits} />

        {/*  */}
        <ShowTask name={this.divNames[0]} times={this.dayTimes} store={this.state.store} />
        <ShowTask name={this.divNames[1]} times={this.dayTimes} store={this.state.store} />
        <ShowTask name={this.divNames[2]} times={this.dayTimes} store={this.state.store} />
        <ShowTask name={this.divNames[3]} times={this.dayTimes} store={this.state.store} />
        <ShowTask name={this.divNames[4]} times={this.dayTimes} store={this.state.store} />
        <ShowTask name={this.divNames[5]} times={this.dayTimes} store={this.state.store} />
        <ShowTask name={this.divNames[6]} times={this.dayTimes} store={this.state.store} />
        <ShowTask name={this.divNames[7]} times={this.dayTimes} store={this.state.store} />
        <ShowTask name={this.divNames[8]} times={this.dayTimes} store={this.state.store} />
        <ShowTask name={this.divNames[9]} times={this.dayTimes} store={this.state.store} />
        <ShowTask name={this.divNames[10]} times={this.dayTimes} store={this.state.store} />
        <ShowTask name={this.divNames[11]} times={this.dayTimes} store={this.state.store} />
        <ShowTask name={this.divNames[12]} times={this.dayTimes} store={this.state.store} />
        <ShowTask name={this.divNames[13]} times={this.dayTimes} store={this.state.store} />
        {/*  */}
        <ShowTask name={this.divNames[14]} times={this.dayTimes} store={this.state.store} />
        <ShowTask name={this.divNames[15]} times={this.dayTimes} store={this.state.store} />
        <ShowTask name={this.divNames[16]} times={this.dayTimes} store={this.state.store} />
        <ShowTask name={this.divNames[17]} times={this.dayTimes} store={this.state.store} />
        <ShowTask name={this.divNames[18]} times={this.dayTimes} store={this.state.store} />
        <ShowTask name={this.divNames[19]} times={this.dayTimes} store={this.state.store} />
        <ShowTask name={this.divNames[20]} times={this.dayTimes} store={this.state.store} />
        <ShowTask name={this.divNames[21]} times={this.dayTimes} store={this.state.store} />
        <ShowTask name={this.divNames[22]} times={this.dayTimes} store={this.state.store} />
        <ShowTask name={this.divNames[23]} times={this.dayTimes} store={this.state.store} />
        <ShowTask name={this.divNames[24]} times={this.dayTimes} store={this.state.store} />
        <ShowTask name={this.divNames[25]} times={this.dayTimes} store={this.state.store} />
        <ShowTask name={this.divNames[26]} times={this.dayTimes} store={this.state.store} />
        <ShowTask name={this.divNames[27]} times={this.dayTimes} store={this.state.store} />
        <ShowTask name={this.divNames[28]} times={this.dayTimes} store={this.state.store} />
        {/*  */}
        <ShowTask name={this.divNames[29]} times={this.dayTimes} store={this.state.store} />
        <ShowTask name={this.divNames[30]} times={this.dayTimes} store={this.state.store} />
        <ShowTask name={this.divNames[31]} times={this.dayTimes} store={this.state.store} />
        <ShowTask name={this.divNames[32]} times={this.dayTimes} store={this.state.store} />
        <ShowTask name={this.divNames[33]} times={this.dayTimes} store={this.state.store} />
        <ShowTask name={this.divNames[34]} times={this.dayTimes} store={this.state.store} />
        {/*  */}
        <HabitSumTime times={this.habitTimes} />
        <PlannedTime times={this.dayTimes} />
        <RealTime times={this.dayTimes} />
      </section>
    );
  }
}

export default App;
