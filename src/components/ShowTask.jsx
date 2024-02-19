import PlannedTime from "./PlannedTime";

const ShowTask = (values) => {
  const myLocalStore = JSON.parse(localStorage.getItem("myTasks"));

  // return jsx to DOM
  const task = (el) => {
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
    return taskFromLocalStore;
  };

  for (const el of myLocalStore) {
    if (values.name === el.id) return task(el);
  }
  return <div className="empty" name={values.name}></div>;
};

export default ShowTask;
