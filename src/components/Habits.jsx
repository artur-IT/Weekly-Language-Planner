/* eslint-disable react/prop-types */
const Habits = (props) => {
  const lang = props.switch;
  const habitEN = props.habitsNames.en;
  const habitPL = props.habitsNames.pl;
  return (
    <>
      <div className="habit1">
        <p className="center_text">{!lang ? habitEN[0] : habitPL[0]}</p>
      </div>
      <div className="habit2">
        <p className="center_text">{!lang ? habitEN[1] : habitPL[1]}</p>
      </div>
      <div className="habit3">
        <p className="center_text">{!lang ? habitEN[2] : habitPL[2]}</p>
      </div>
      <div className="habit4">
        <p className="center_text">{!lang ? habitEN[3] : habitPL[3]}</p>
      </div>
      <div className="habit5">
        <p className="center_text">{!lang ? habitEN[4] : habitPL[4]}</p>
      </div>
    </>
  );
};

export default Habits;
