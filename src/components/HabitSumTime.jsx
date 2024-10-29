const HabitSumTime = ({ times }) => {
  return (
    <>
      {times.map((habit, index) => (
        <div key={habit.study} className={`habit${index + 1}_sum`}>
          <p className="center_text">{habit.time > 0 ? `${habit.time} min.` : null}</p>
        </div>
      ))}
    </>
  );
};

export default HabitSumTime;
