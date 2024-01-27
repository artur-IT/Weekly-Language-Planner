// let newTask = {
//   day: "",
//   study: "",
//   name: "",
//   time: 0,
// };

let taskNames = [];
let taskDB = [];
const days = ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"];
const habits = ["SPEAKING", "READING", "WRITING", "LISTENING", "VOCABULARY"];

getTaskFromUser = (e) => {
  e.preventDefault();
  const myDay = document.querySelector(".day_task");
  const myStudy = document.querySelector(".study");
  const myTask = document.querySelector(".task_name");
  const myTime = document.querySelector(".task_time");
  console.log(myDay.value, myStudy.value, myTask.value, myTime.value);
};

document.querySelector("button").onclick = getTaskFromUser;

for (let x = 0; x < days.length; x++) {
  for (let y = 0; y < habits.length; y++) {
    const newTaskName = days[x] + `-` + habits[y].toLocaleLowerCase();
    const test = {
      [newTaskName]: {
        name: "",
        time: 0,
      },
    };
    taskDB.push(test);
  }
}

console.log(taskDB);

class EmptyTaskBox {
  constructor(day, study) {
    this.day;
    this.study;
    name: "";
    time: 0;
  }

  addTask() {
    console.log(this.day, this.study);
  }
}
