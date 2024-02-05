// import GetTaskBox from "./GetTaskBox.jsx";

const getTaskFromUser = (e) => {
  e.preventDefault();
  const myDay = document.querySelector(".day_task");
  const myStudy = document.querySelector(".study");
  const myTask = document.querySelector(".task_name");
  const myTime = document.querySelector(".task_time");
  const id = myDay.value.toLocaleLowerCase() + "-" + myStudy.value;
  const date_add = new Date().toLocaleDateString("pl-PL");

  const newTask = new TaskBox(id, date_add, myDay.value, myStudy.value, myTask.value, myTime.value);
  window.localStorage.setItem(id, JSON.stringify(newTask));
  // console.log(JSON.parse(window.localStorage.getItem(id)));
  GetTaskBox(id);
};

document.querySelector("button").onclick = getTaskFromUser;

// REACT COMPONENT
const GetTaskBox = () => {
  const emptyBoxes = document.querySelectorAll(".empty");

  // for (let i = 0; i < localStorage.length; i++) {
  // console.log(localStorage.key(i));

  for (const el of emptyBoxes) {
    const emptyBoxName = el.attributes.name.nodeValue;
    const localStoreId = JSON.parse(localStorage.getItem(emptyBoxName));
    console.log(localStoreId:id);

    // if (emptyBoxName === localStoreId) {
    //   el.style.backgroundColor = "yellow";
    //   el.textContent = "oko";
    //   console.log("jest");
    // }
  }

  // }
};
//------------

// for (let x = 0; x < days.length; x++) {
//   for (let y = 0; y < habits.length; y++) {
//     const newTaskName = days[x].toLocaleLowerCase() + `-` + habits[y];
//     const test = {
//       [newTaskName]: {
//         name: "",
//         time: 0,
//       },
//     };
//     taskDB.push(test);
//     console.log(newTaskName);
//   }
// }

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

GetTaskBox();

const MyApp = () => {
  return;
  // <GetTaskBox />;
  // <h1>Hello, world!</h1>;
  // <GetTaskBox />;
};
const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<MyApp />);
