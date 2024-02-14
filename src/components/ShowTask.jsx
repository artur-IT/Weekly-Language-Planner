const ShowTask = (taskValues) => {
  console.log(taskValues);
  if (!taskValues || taskValues === null) return <p>nic</p>;
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
