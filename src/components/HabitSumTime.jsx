/* eslint-disable react/prop-types */
const HabitSumTime = (props) => {
  return (
    <>
      <div className="habit1_sum">
        <p className="center_text">{props.times[0].time}</p>
      </div>

      <div className="habit2_sum">
        <p className="center_text">{props.times[1].time}</p>
      </div>

      <div className="habit3_sum">
        <p className="center_text">{props.times[2].time}</p>
      </div>

      <div className="habit4_sum">
        <p className="center_text">{props.times[3].time}</p>
      </div>

      <div className="habit5_sum">
        <p className="center_text">{props.times[4].time}</p>
      </div>
    </>
  );
};

export default HabitSumTime;
