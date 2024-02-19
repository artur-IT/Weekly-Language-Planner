const ShowTask = (values) => {
  // show all task's from LocalStore to empty boxes
  const myLocalStore = JSON.parse(localStorage.getItem("myTasks"));
  let dayTimes = [
    { day: "Monday", time: 0, real_time: 0 },
    { day: "Tuesday", time: 0, real_time: 0 },
    { day: "Wednesday", time: 0, real_time: 0 },
    { day: "Thursday", time: 0, real_time: 0 },
    { day: "Friday", time: 0, real_time: 0 },
    { day: "Saturday", time: 0, real_time: 0 },
    { day: "Sunday", time: 0, real_time: 0 },
  ];

  const summaryOneDayTime = (day, time) => {
    dayTimes.forEach((item) => (item.day === day ? (item.time += Number(time)) : null));

    // document.querySelector(".monday_sum_time").textContent = `${dayTimes[0].time} min.`;
    // document.querySelector(".tuesday_sum_time").textContent = `${dayTimes[1].time} min.`;
    // document.querySelector(".wednesday_sum_time").textContent = `${dayTimes[2].time} min.`;
    // document.querySelector(".thursday_sum_time").textContent = `${dayTimes[3].time} min.`;
    // document.querySelector(".friday_sum_time").textContent = `${dayTimes[4].time} min.`;
    // document.querySelector(".saturday_sum_time").textContent = `${dayTimes[5].time} min.`;
    // document.querySelector(".sunday_sum_time").textContent = `${dayTimes[6].time} min.`;
  };

  const showTask = (el) => {
    const taskFromLocalStore = (
      <div className="empty" name={values.name}>
        <div>
          <p>{el.name}</p>
          <hr />
          <p>{el.time} min.</p>
          <button className="btn_remove"></button>
          <button className="btn_done"></button>
        </div>
      </div>
    );
    summaryOneDayTime(el.day, el.time);
    console.log(taskFromLocalStore);
    return taskFromLocalStore;
  };

  for (const el of myLocalStore) {
    // summaryOneHabitTime(localStoreId.study, localStoreId.time);
    if (values.name === el.id) return showTask(el);
  }
  return <div className="empty" name={values.name}></div>;
};

export default ShowTask;
