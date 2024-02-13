const ShowTask = (taskValues) => {
  console.log(taskValues.id);
  if (!taskValues) return;
  else
    return (
      <div>
        <p>{taskValues.name}</p>
        <hr />
        <p>{taskValues.time} min.</p>
        <button className="btn_remove"></button>
        <button className="btn_done"></button>
      </div>
    );
};

export default ShowTask;
