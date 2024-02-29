/* eslint-disable react/prop-types */
const Days = (props) => {
  const lang = props.switch;
  const dayEN = props.daysNames.en;
  const dayPL = props.daysNames.pl;
  return (
    <>
      <div className="zero"></div>
      <div className="monnday">
        <p className="center_text">{!lang ? dayEN[0] : dayPL[0]}</p>
      </div>
      <div className="tuesday">
        <p className="center_text">{!lang ? dayEN[1] : dayPL[1]}</p>
      </div>
      <div className="wednesday">
        <p className="center_text">{!lang ? dayEN[2] : dayPL[2]}</p>
      </div>
      <div className="thursday">
        <p className="center_text">{!lang ? dayEN[3] : dayPL[3]}</p>
      </div>
      <div className="friday">
        <p className="center_text">{!lang ? dayEN[4] : dayPL[4]}</p>
      </div>
      <div className="saturday">
        <p className="center_text">{!lang ? dayEN[5] : dayPL[5]}</p>
      </div>
      <div className="sunday">
        <p className="center_text">{!lang ? dayEN[6] : dayPL[6]}</p>
      </div>
      <div className="habit_sum">
        <p className="center_text">{!lang ? "Habit time" : "Czas nawyku"}</p>
      </div>
    </>
  );
};

export default Days;
