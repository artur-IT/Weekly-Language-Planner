//---------------------------------

const ShowTask = (values) => {
  if (values.taskValues === null) return <div className="empty" name={values.name}></div>;
  else
    return (
      <div className="empty" name={values.name}>
        <p>{values.name}</p>
        <hr />
        <p>{values.time} min.</p>
        <button className="btn_remove"></button>
        <button className="btn_done"></button>
      </div>
    );
};

export default ShowTask;
