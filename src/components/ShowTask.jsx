import { useCallback } from "react";

const ShowTask = ({ name, store, updateStore }) => {
  // -- BTN_REMOVE HANDLER
  const removeTaskHandle = useCallback(() => {
    const findTaskIdx = store.findIndex((el) => el.id === name);
    if (findTaskIdx !== -1) {
      const newStore = [...store];
      newStore.splice(findTaskIdx, 1);
      updateStore(newStore);
    }
  }, [name, store, updateStore]);

  // -- BTN_DONE HANDLER
  const doneTaskHandle = useCallback(() => {
    const findTaskIdx = store.findIndex((el) => el.id === name);
    if (findTaskIdx !== -1) {
      const newStore = [...store];
      newStore[findTaskIdx] = {
        ...newStore[findTaskIdx],
        done: !newStore[findTaskIdx].done,
      };
      updateStore(newStore);
    }
  }, [name, store, updateStore]);

  // return jsx to DOM
  const renderTask = useCallback(
    (task) => {
      return (
        <div className={`empty${task.done ? ` done_task_bgc` : ""}`} data-task-id={name}>
          <div>
            <p>{task.name}</p>
            <p>{task.time} min.</p>
            <button className="btn_remove" onClick={removeTaskHandle} aria-label="Remove task"></button>
            <button className="btn_done" onClick={doneTaskHandle} aria-label="Mark as done"></button>
          </div>
        </div>
      );
    },
    [doneTaskHandle, name, removeTaskHandle]
  );

  const task = store?.find((el) => el.id === name);
  return task ? renderTask(task) : <div className="empty" data-task-id={name}></div>;
};

export default ShowTask;
