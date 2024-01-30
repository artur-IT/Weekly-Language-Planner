import GetTaskBox from "./GetTaskBox.jsx";

const getTaskFromUser = (e) => {
  const myDay = document.querySelector(".day_task");
  const myStudy = document.querySelector(".study");
  const myTask = document.querySelector(".task_name");
  const myTime = document.querySelector(".task_time");
  const id = myDay.value + "-" + myStudy.value;
  const date_add = new Date().toLocaleDateString("pl-PL");
  e.preventDefault();
  const newTask = new TaskBox(id, date_add, myDay.value, myStudy.value, myTask.value, myTime.value);
  window.localStorage.setItem(id, JSON.stringify(newTask));
  // console.log(JSON.parse(window.localStorage.getItem(id)));
};

document.querySelector("button").onclick = getTaskFromUser;

// for (let x = 0; x < days.length; x++) {
//   for (let y = 0; y < habits.length; y++) {
//     const newTaskName = days[x].toLocaleLowerCase() + `-` + habits[y];
//     //
//     const test = {
//       [newTaskName]: {
//         name: "",
//         time: 0,
//       },
//     };
//     taskDB.push(test);
//   }
// }

// console.log(taskDB);

class TaskBox {
  constructor(id, date_add, day, study, name, time) {
    this.id = id;
    this.date_add = date_add;
    this.day = day;
    this.study = study;
    this.name = name;
    this.time = time;
    // this.active = false;
  }

  addTask() {
    console.log(this.day, this.study);
  }
}

const MyApp = () => {
  return <h1>Hello, world!</h1>;
  // <GetTaskBox />;
};
const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<MyApp />);
