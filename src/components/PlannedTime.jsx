const PlannedTime = (props) => {
  return (
    <>
      <div className="plannded_time">
        <p className="center_text">Planned time:</p>
      </div>

      <div className="monday_sum_time">{props.times[0].time}</div>
      <div className="tuesday_sum_time">{props.times[1].time}</div>
      <div className="wednesday_sum_time">{props.times[2].time}</div>
      <div className="thursday_sum_time">{props.times[3].time}</div>
      <div className="friday_sum_time">{props.times[4].time}</div>
      <div className="saturday_sum_time">{props.times[5].time}</div>
      <div className="sunday_sum_time">{props.times[6].time}</div>
      {/* <div className="habit_sum_bgc">{0}</div> */}
    </>
  );
};

export default PlannedTime;
