/* eslint-disable react/prop-types */
const RealTime = (props) => {
  const time = props.times;
  return (
    <>
      <div className="time_done">
        <p className="center_text">{!props.switch ? "My real time:" : "Zrealizowany czas:"}</p>
      </div>

      <div className="monday_real_time">{time[0].real_time > 0 ? `${time[0].real_time} min.` : null}</div>
      <div className="tuesday_real_time">{time[1].real_time > 0 ? `${time[1].real_time} min.` : null}</div>
      <div className="wednesday_real_time">{time[2].real_time > 0 ? `${time[2].real_time} min.` : null}</div>
      <div className="thursday_real_time">{time[3].real_time > 0 ? `${time[3].real_time} min.` : null}</div>
      <div className="friday_real_time">{time[4].real_time > 0 ? `${time[4].real_time} min.` : null}</div>
      <div className="saturday_real_time">{time[5].real_time > 0 ? `${time[5].real_time} min.` : null}</div>
      <div className="sunday_real_time">{time[6].real_time > 0 ? `${time[6].real_time} min.` : null}</div>
      <div className="habit_sum_bgc">-</div>
    </>
  );
};

export default RealTime;
