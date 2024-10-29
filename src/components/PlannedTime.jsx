const PlannedTime = ({ times, switchPL }) => {
  return (
    <>
      <div className="plannded_time">
        <p className="center_text">{!switchPL ? "Planned time:" : "Planowany czas:"}</p>
      </div>

      <div className="monday_sum_time">{times[0].time > 0 ? `${times[0].time} min.` : null} </div>
      <div className="tuesday_sum_time">{times[1].time > 0 ? `${times[1].time} min.` : null}</div>
      <div className="wednesday_sum_time">{times[2].time > 0 ? `${times[2].time} min.` : null}</div>
      <div className="thursday_sum_time">{times[3].time > 0 ? `${times[3].time} min.` : null}</div>
      <div className="friday_sum_time">{times[4].time > 0 ? `${times[4].time} min.` : null}</div>
      <div className="habit_sum_bgc"></div>
    </>
  );
};

export default PlannedTime;
