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
    this.myLocalStore = localStorage.getItem("myTasks") ? JSON.parse(localStorage.getItem("myTasks")) : [];

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

  // CREATE ARRAY WITH NAMES (for div): day-HABIT
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
    const summaryOneDayTime = (day, time) => {
      this.dayTimes.forEach((item) => (item.time = 0));
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

  // GET NEW TASK FROM USER AND SAVE TO LocalStorage
  addTaskFromUser = (e) => {
    e.preventDefault();
    const myDay = document.querySelector(".day_task");
    const myStudy = document.querySelector(".study");
    const myTask = document.querySelector(".task_name");
    const myTime = document.querySelector(".task_time");
    const id = myDay.value.toLocaleLowerCase() + "-" + myStudy.value;
    const date_add = new Date().toLocaleDateString("pl-PL");

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
    // add new task to this.state and LocalStore
    if (myDay.value && myStudy.value && myTask.value && myTime.value != 0) {
      const newTask = new TaskBox(id, date_add, myDay.value, myStudy.value, myTask.value, myTime.value);

      this.myLocalStore.push(newTask);
      this.setState({ store: this.myLocalStore });
      localStorage.setItem("myTasks", JSON.stringify(this.state.store));
    } else alert("Uzupełnij pola!");

    myDay.value = myStudy.value = myTask.value = myTime.value = null;
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
  // -- BTN_REMOVE HANDLER
  removeTaskHandle = () => {
    document.querySelectorAll(".btn_remove").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const taskName = e.target.parentElement.parentElement.attributes.name.nodeValue;

        let findTaskIdx = this.state.store.findIndex((el) => el.id === taskName);
        this.state.store.splice(findTaskIdx, 1);
        localStorage.setItem("myTasks", JSON.stringify(this.state.store));
      });
    });
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
      this.removeTaskHandle();
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
