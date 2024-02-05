// import GetTaskBox from "./GetTaskBox.jsx";

// KOMPONENT wyświetla zadanie z LocalStorage
const ShowTask = ({ taskValues }) => {
  return (
    <div>
      <p>{taskValues.name}</p>
      <p>{taskValues.time} min.</p>
      <p>{taskValues.date_add}</p>
    </div>
  );
};

// search empty boxes and compare to LocalStore
const GetTaskBox = () => {
  const emptyBoxes = document.querySelectorAll(".empty");

  for (const el of emptyBoxes) {
    // get box name from DOM
    const emptyBoxName = el.attributes.name.nodeValue;
    const localStoreId = JSON.parse(localStorage.getItem(emptyBoxName));

    // show all task's from LocalStore to empty boxes
    if (localStoreId) {
      el.style.backgroundColor = "yellow";
      const empty = ReactDOM.createRoot(el);
      empty.render(<ShowTask taskValues={localStoreId} />);
    }
  }
};

GetTaskBox();

// object to new task from user
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
}

// get new task from user and save to LocalStorage
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
