// (init = () => {
// })();

let taskDB = [];
// const days = ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"];
// const habits = ["SPEAKING", "READING", "WRITING", "LISTENING", "VOCABULARY"];

getTaskFromUser = (e) => {
  const myDay = document.querySelector(".day_task");
  const myStudy = document.querySelector(".study");
  const myTask = document.querySelector(".task_name");
  const myTime = document.querySelector(".task_time");
  const id = myDay.value + "-" + myStudy.value;

  e.preventDefault();
  const newTask = new TaskBox(id, myDay.value, myStudy.value, myTask.value, myTime.value);

  window.localStorage.setItem(id, JSON.stringify(newTask));
  // console.log(newTask);
  // taskDB.push(newTask);
  for (let i = 0; i < window.localStorage.length; i++) {
    console.log(window.localStorage);
  }
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
  constructor(id, day, study, name, time) {
    this.id = id;
    this.day = day;
    this.study = study;
    this.name = name;
    this.time = time;
    this.active = false;
  }

  addTask() {
    console.log(this.day, this.study);
  }
}
