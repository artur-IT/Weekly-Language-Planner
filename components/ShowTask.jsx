const ShowTask = ({ taskValues }) => {
  return (
    <div>
      <p>{taskValues.name}</p>
      <p>{taskValues.time} min.</p>
    </div>
  );
};

export default ShowTask;
