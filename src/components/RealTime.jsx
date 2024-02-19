/* eslint-disable react/prop-types */
const RealTime = (props) => {
  return (
    <>
      <div className="time_done">
        <p className="center_text">My real time:</p>
      </div>

      <div className="monday_real_time">{props.times[0].real_time > 0 ? `${props.times[0].real_time} min.` : null}</div>
      <div className="tuesday_real_time">{props.times[1].real_time > 0 ? `${props.times[1].real_time} min.` : null}</div>
      <div className="wednesday_real_time">{props.times[2].real_time > 0 ? `${props.times[2].real_time} min.` : null}</div>
      <div className="thursday_real_time">{props.times[3].real_time > 0 ? `${props.times[3].real_time} min.` : null}</div>
      <div className="friday_real_time">{props.times[4].real_time > 0 ? `${props.times[4].real_time} min.` : null}</div>
      <div className="saturday_real_time">{props.times[5].real_time > 0 ? `${props.times[5].real_time} min.` : null}</div>
      <div className="sunday_real_time">{props.times[6].real_time > 0 ? `${props.times[6].real_time} min.` : null}</div>
      <div className="habit_sum_bgc">-</div>
    </>
  );
};

export default RealTime;
