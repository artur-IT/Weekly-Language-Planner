import { useRef } from "react";

const ShowTask = (values) => {
  const myLocalStore = values.store;
  const myRef = useRef();

  // -- BTN_REMOVE HANDLER
  const removeTaskHandle = () => {
    const taskName = (myRef.current = values.name);
    let findTaskIdx = myLocalStore.findIndex((el) => el.id === taskName);
    myLocalStore.splice(findTaskIdx, 1);
    values.updateStore(myLocalStore);
    localStorage.setItem("myTasks", JSON.stringify(myLocalStore));
  };

  // -- BTN_DONE HANDLER
  const doneTaskHandle = () => {
    const taskName = (myRef.current = values.name);
    const findTaskIdx = myLocalStore.findIndex((el) => el.id === taskName);
    myLocalStore[findTaskIdx].done = !myLocalStore[findTaskIdx].done;
    values.updateStore(myLocalStore);
    localStorage.setItem("myTasks", JSON.stringify(myLocalStore));
  };

  // return jsx to DOM
  const task = (el) => {
    const taskFromLocalStore = (
      <div className={`empty${el.done == true ? ` done_task_bgc` : ""}`} name={values.name}>
        <div>
          <p>{el.name}</p>
          <p>{el.time} min.</p>
          <button className="btn_remove" ref={myRef} onClick={removeTaskHandle}></button>
          <button className="btn_done" ref={myRef} onClick={doneTaskHandle}></button>
        </div>
      </div>
    );
    return taskFromLocalStore;
  };

  if (myLocalStore) {
    for (const el of myLocalStore) {
      if (values.name === el.id) return task(el);
    }
  } else null;

  return <div className="empty" name={values.name}></div>;
};

export default ShowTask;
