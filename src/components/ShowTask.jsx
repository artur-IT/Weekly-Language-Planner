import { useRef } from "react";

const ShowTask = (values) => {
  const myLocalStore = values.store;
  const myRef = useRef();

  // -- BTN_REMOVE HANDLER
  const removeTask = () => {
    myRef.current = values.name;
    const taskName = myRef.current;

    let findTaskIdx = myLocalStore.findIndex((el) => el.id === taskName);
    myLocalStore.splice(findTaskIdx, 1);
    myRef.current = null;

    localStorage.setItem("myTasks", JSON.stringify(myLocalStore));
    // console.log(myRef.current);
  };

  // return jsx to DOM
  const task = (el) => {
    const taskFromLocalStore = (
      <div className="empty" name={values.name}>
        <div>
          <p>{el.name}</p>
          <hr />
          <p>{el.time} min.</p>
          <button className="btn_remove" ref={myRef} onClick={removeTask}></button>
          <button className="btn_done"></button>
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
