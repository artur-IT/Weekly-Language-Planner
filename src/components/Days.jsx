const Days = ({ daysNames, switch: switchPL }) => {
  return (
    <>
      <div className="zero"></div>
      {daysNames[switchPL ? "pl" : "en"].map((day, index) => (
        <div key={day} className={daysNames.en[index].toLowerCase()}>
          <p className="center_text">{day}</p>
        </div>
      ))}
      <div className="habit_sum">
        <p className="center_text">{!switchPL ? "Habit time" : "Czas nawyku"}</p>
      </div>
    </>
  );
};

export default Days;
