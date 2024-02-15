export const MyTaskTable = (props) => {
  // console.log(props);
  return <div className="empty" name="monday-SPEAKING"></div>;
};

const ShowTask = (taskValues) => {
  // console.log(taskValues.taskValues);
  if (taskValues.taskValues === null) return <MyTaskTable />;
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
