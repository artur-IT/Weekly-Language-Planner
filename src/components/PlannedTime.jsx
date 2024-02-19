/* eslint-disable react/prop-types */
const PlannedTime = (props) => {
  return (
    <>
      <div className="plannded_time">
        <p className="center_text">Planned time:</p>
      </div>

      <div className="monday_sum_time">{props.times[0].time > 0 ? `${props.times[0].time} min.` : null} </div>
      <div className="tuesday_sum_time">{props.times[1].time > 0 ? `${props.times[1].time} min.` : null}</div>
      <div className="wednesday_sum_time">{props.times[2].time > 0 ? `${props.times[2].time} min.` : null}</div>
      <div className="thursday_sum_time">{props.times[3].time > 0 ? `${props.times[3].time} min.` : null}</div>
      <div className="friday_sum_time">{props.times[4].time > 0 ? `${props.times[4].time} min.` : null}</div>
      <div className="saturday_sum_time">{props.times[5].time > 0 ? `${props.times[5].time} min.` : null}</div>
      <div className="sunday_sum_time">{props.times[6].time > 0 ? `${props.times[6].time} min.` : null}</div>
      <div className="habit_sum_bgc">-</div>
    </>
  );
};

export default PlannedTime;
