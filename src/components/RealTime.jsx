const RealTime = ({ times, switchPL }) => {
  return (
    <>
      <div className="time_done">
        <p className="center_text">{!switchPL ? "My real time:" : "Zrealizowany czas:"}</p>
      </div>

      <div className="monday_real_time">{times[0].real_time > 0 ? `${times[0].real_time} min.` : null}</div>
      <div className="tuesday_real_time">{times[1].real_time > 0 ? `${times[1].real_time} min.` : null}</div>
      <div className="wednesday_real_time">{times[2].real_time > 0 ? `${times[2].real_time} min.` : null}</div>
      <div className="thursday_real_time">{times[3].real_time > 0 ? `${times[3].real_time} min.` : null}</div>
      <div className="friday_real_time">{times[4].real_time > 0 ? `${times[4].real_time} min.` : null}</div>
      <div className="habit_sum_bgc"></div>
    </>
  );
};

export default RealTime;
