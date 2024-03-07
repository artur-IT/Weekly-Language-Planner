import { Component } from "react";

import Header from "./components/Header";
import SectionAddTask from "./components/SectionAddTask";
import Language from "./components/Language.jsx";
import ShowTask from "./components/ShowTask";
import Days from "./components/Days";
import Habits from "./components/Habits";
import PlannedTime from "./components/PlannedTime";
import RealTime from "./components/RealTime";
import HabitSumTime from "./components/HabitSumTime";

export class App extends Component {
  constructor() {
    super();
    this.myLang = localStorage.getItem("languagePL") ? JSON.parse(localStorage.getItem("languagePL")) : false;

    this.state = {
      store: localStorage.getItem("myTasks") ? JSON.parse(localStorage.getItem("myTasks")) : [],
      switchPL: this.myLang,
      days: {
        en: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        pl: ["Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota", "Niedziela"],
      },
      habits: {
        en: ["SPEAKING", "READING", "WRITING", "LISTENING", "VOCABULARY"],
        pl: ["MÓWIENIE", "CZYTANIE", "PISANIE", "SŁUCHANIE", "SŁOWNICTWO"],
      },
    };

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
    for (let x = 0; x < this.state.days.en.length; x++) {
      for (let y = 0; y < this.state.days.en.length; y++) {
        const divName = this.state.days.en[y].toLocaleLowerCase() + `-` + this.state.habits.en[x];
        this.divNames.push(divName);
      }
    }
    return;
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
    const myLocalStore = this.state.store;

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
        myLocalStore.push({
          id: id,
          date_add: date_add,
          day: myDay,
          study: myStudy,
          name: myTask,
          time: myTime,
          done: false,
          active: false,
        });
        localStorage.setItem("myTasks", JSON.stringify(myLocalStore));
        this.setState({ store: myLocalStore });
        this.clearAllInputs();
      }
    } else alert("Uzupełnij pola!");
  };

  clearAllInputs = () => document.getElementById("task_inputs").reset();

  // SUMMARY FROM ALL TASKS PLANNED TIME FROM ONE-DAY
  getOneDayTimes = () => {
    this.dayTimes.forEach((item) => (item.time = 0));
    const summaryOneDayTime = (day, time) => this.dayTimes.forEach((item) => (item.day === day ? (item.time += Number(time)) : null));
    for (const el of this.state.store) summaryOneDayTime(el.day, el.time);
  };

  // SUMMARY ONE HABIT TIMES FROM ALL DAYS
  getOneHabitTimes = () => {
    this.habitTimes.forEach((item) => (item.time = 0));
    const summaryOneHabitTime = (study, time) =>
      this.habitTimes.forEach((item) => (item.study === study ? (item.time += Number(time)) : null));
    for (const el of this.state.store) summaryOneHabitTime(el.study, el.time);
  };

  // SUMMARY MY REALLY TIME (tasks done)
  getOneDayRealTime = () => {
    this.dayTimes.forEach((item) => (item.real_time = 0));
    const summaryRealTime = (day, time) => this.dayTimes.forEach((item) => (item.day === day ? (item.real_time += Number(time)) : null));
    for (const el of this.state.store) el.done == true ? summaryRealTime(el.day, el.time) : null;
  };

  // UPDATE state AFTER REMOVE TASK FROM COMPONENT ShowTask
  newStore = (newStore = []) => this.setState({ store: newStore });

  // SWITCH LANGUAGE in state
  newStateSwitchPL = (lang) => this.setState({ switchPL: lang });

  render() {
    {
      this.namesForDIV();
      this.getOneDayTimes();
      this.getOneDayRealTime();
      this.getOneHabitTimes();
    }

    return (
      <>
        <Header store={this.state} updateStore={this.newStore} />
        <SectionAddTask store={this.state} addTaskFromUser={this.addTaskFromUser} />
        <section className="layout">
          <Days daysNames={this.state.days} switch={this.state.switchPL} />
          <Habits habitsNames={this.state.habits} switch={this.state.switchPL} />
          {/*  */}
          <ShowTask name={this.divNames[0]} times={this.dayTimes} store={this.state.store} updateStore={this.newStore} />
          <ShowTask name={this.divNames[1]} times={this.dayTimes} store={this.state.store} updateStore={this.newStore} />
          <ShowTask name={this.divNames[2]} times={this.dayTimes} store={this.state.store} updateStore={this.newStore} />
          <ShowTask name={this.divNames[3]} times={this.dayTimes} store={this.state.store} updateStore={this.newStore} />
          <ShowTask name={this.divNames[4]} times={this.dayTimes} store={this.state.store} updateStore={this.newStore} />
          <ShowTask name={this.divNames[5]} times={this.dayTimes} store={this.state.store} updateStore={this.newStore} />
          <ShowTask name={this.divNames[6]} times={this.dayTimes} store={this.state.store} updateStore={this.newStore} />
          <ShowTask name={this.divNames[7]} times={this.dayTimes} store={this.state.store} updateStore={this.newStore} />
          <ShowTask name={this.divNames[8]} times={this.dayTimes} store={this.state.store} updateStore={this.newStore} />
          <ShowTask name={this.divNames[9]} times={this.dayTimes} store={this.state.store} updateStore={this.newStore} />
          <ShowTask name={this.divNames[10]} times={this.dayTimes} store={this.state.store} updateStore={this.newStore} />
          <ShowTask name={this.divNames[11]} times={this.dayTimes} store={this.state.store} updateStore={this.newStore} />
          <ShowTask name={this.divNames[12]} times={this.dayTimes} store={this.state.store} updateStore={this.newStore} />
          <ShowTask name={this.divNames[13]} times={this.dayTimes} store={this.state.store} updateStore={this.newStore} />
          <ShowTask name={this.divNames[14]} times={this.dayTimes} store={this.state.store} updateStore={this.newStore} />
          <ShowTask name={this.divNames[15]} times={this.dayTimes} store={this.state.store} updateStore={this.newStore} />
          <ShowTask name={this.divNames[16]} times={this.dayTimes} store={this.state.store} updateStore={this.newStore} />
          <ShowTask name={this.divNames[17]} times={this.dayTimes} store={this.state.store} updateStore={this.newStore} />
          <ShowTask name={this.divNames[18]} times={this.dayTimes} store={this.state.store} updateStore={this.newStore} />
          <ShowTask name={this.divNames[19]} times={this.dayTimes} store={this.state.store} updateStore={this.newStore} />
          <ShowTask name={this.divNames[20]} times={this.dayTimes} store={this.state.store} updateStore={this.newStore} />
          <ShowTask name={this.divNames[21]} times={this.dayTimes} store={this.state.store} updateStore={this.newStore} />
          <ShowTask name={this.divNames[22]} times={this.dayTimes} store={this.state.store} updateStore={this.newStore} />
          <ShowTask name={this.divNames[23]} times={this.dayTimes} store={this.state.store} updateStore={this.newStore} />
          <ShowTask name={this.divNames[24]} times={this.dayTimes} store={this.state.store} updateStore={this.newStore} />
          <ShowTask name={this.divNames[25]} times={this.dayTimes} store={this.state.store} updateStore={this.newStore} />
          <ShowTask name={this.divNames[26]} times={this.dayTimes} store={this.state.store} updateStore={this.newStore} />
          <ShowTask name={this.divNames[27]} times={this.dayTimes} store={this.state.store} updateStore={this.newStore} />
          <ShowTask name={this.divNames[28]} times={this.dayTimes} store={this.state.store} updateStore={this.newStore} />
          <ShowTask name={this.divNames[29]} times={this.dayTimes} store={this.state.store} updateStore={this.newStore} />
          <ShowTask name={this.divNames[30]} times={this.dayTimes} store={this.state.store} updateStore={this.newStore} />
          <ShowTask name={this.divNames[31]} times={this.dayTimes} store={this.state.store} updateStore={this.newStore} />
          <ShowTask name={this.divNames[32]} times={this.dayTimes} store={this.state.store} updateStore={this.newStore} />
          <ShowTask name={this.divNames[33]} times={this.dayTimes} store={this.state.store} updateStore={this.newStore} />
          <ShowTask name={this.divNames[34]} times={this.dayTimes} store={this.state.store} updateStore={this.newStore} />
          {/*  */}
          <HabitSumTime times={this.habitTimes} />
          <PlannedTime times={this.dayTimes} switch={this.state.switchPL} />
          <RealTime times={this.dayTimes} switch={this.state.switchPL} />
          <Language updateLang={this.newStateSwitchPL} switch={this.state.switchPL} />
        </section>
      </>
    );
  }
}

export default App;
