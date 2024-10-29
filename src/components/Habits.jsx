const Habits = ({ habitsNames, switch: lang }) => {
  return (
    <>
      {habitsNames.en.map((habit, index) => (
        <div key={`habit${index + 1}`} className={`habit${index + 1}`}>
          <p className="center_text">{!lang ? habitsNames.en[index] : habitsNames.pl[index]}</p>
        </div>
      ))}
    </>
  );
};

export default Habits;
