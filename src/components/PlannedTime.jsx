/* eslint-disable react/prop-types */
const PlannedTime = (props) => {
  const time = props.times;
  return (
    <>
      <div className="plannded_time">
        <p className="center_text">{!props.switch ? "Planned time:" : "Planowany czas:"}</p>
      </div>

      <div className="monday_sum_time">{time[0].time > 0 ? `${time[0].time} min.` : null} </div>
      <div className="tuesday_sum_time">{time[1].time > 0 ? `${time[1].time} min.` : null}</div>
      <div className="wednesday_sum_time">{time[2].time > 0 ? `${time[2].time} min.` : null}</div>
      <div className="thursday_sum_time">{time[3].time > 0 ? `${time[3].time} min.` : null}</div>
      <div className="friday_sum_time">{time[4].time > 0 ? `${time[4].time} min.` : null}</div>
      <div className="habit_sum_bgc"></div>
    </>
  );
};

export default PlannedTime;
