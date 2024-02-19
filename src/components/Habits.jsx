const Habits = (props) => {
  // eslint-disable-next-line react/prop-types
  const habit = props.habitsNames;
  return (
    <>
      <div className="habit1">
        <p className="center_text">{habit[0]}</p>
      </div>
      <div className="habit2">
        <p className="center_text">{habit[1]}</p>
      </div>
      <div className="habit3">
        <p className="center_text">{habit[2]}</p>
      </div>
      <div className="habit4">
        <p className="center_text">{habit[3]}</p>
      </div>
      <div className="habit5">
        <p className="center_text">{habit[4]}</p>
      </div>
    </>
  );
};

export default Habits;
