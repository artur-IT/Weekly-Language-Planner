const Days = (props) => {
  // eslint-disable-next-line react/prop-types
  const day = props.daysNames;
  return (
    <>
      <div className="zero"></div>
      <div className="monnday">
        <p className="center_text">{day[0]}</p>
      </div>
      <div className="tuesday">
        <p className="center_text">{day[1]}</p>
      </div>
      <div className="wednesday">
        <p className="center_text">{day[2]}</p>
      </div>
      <div className="thursday">
        <p className="center_text">{day[3]}</p>
      </div>
      <div className="friday">
        <p className="center_text">{day[4]}</p>
      </div>
      <div className="saturday">
        <p className="center_text">{day[5]}</p>
      </div>
      <div className="sunday">
        <p className="center_text">{day[6]}</p>
      </div>
      <div className="habit_sum">
        <p className="center_text">Habit Summary Time</p>
      </div>
    </>
  );
};

export default Days;
