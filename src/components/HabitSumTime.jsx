/* eslint-disable react/prop-types */
const HabitSumTime = (props) => {
  const time = props.times;
  return (
    <>
      <div className="habit1_sum">
        <p className="center_text">{time[0].time > 0 ? `${time[0].time} min.` : null}</p>
      </div>
      <div className="habit2_sum">
        <p className="center_text">{time[1].time > 0 ? `${time[1].time} min.` : null}</p>
      </div>
      <div className="habit3_sum">
        <p className="center_text">{time[2].time > 0 ? `${time[2].time} min.` : null}</p>
      </div>
      <div className="habit4_sum">
        <p className="center_text">{time[3].time > 0 ? `${time[3].time} min.` : null}</p>
      </div>
      <div className="habit5_sum">
        <p className="center_text">{time[4].time > 0 ? `${time[4].time} min.` : null}</p>
      </div>
    </>
  );
};

export default HabitSumTime;
