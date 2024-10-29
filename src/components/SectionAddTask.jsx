/* eslint-disable react/prop-types */
const SectionAddTask = ({ switchPL: lang, days, habits, store, setStore }) => {
  const onAddTask = (formData) => {
    const { day, study, task: name, time } = formData;
    const id = `${day.toLowerCase()}-${study}`;

    if (store.some((task) => task.id === id)) {
      alert("W tym polu jest już zadanie, usuń je najpierw / There is already a task in this field, please delete it first");
      return false;
    }

    const newTask = {
      id,
      date_add: new Date().toLocaleDateString("pl-PL"),
      day,
      study,
      name,
      time,
      done: false,
      active: false,
    };

    setStore((prev) => [...prev, newTask]);
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      day: e.target.elements["day-task"].value,
      study: e.target.elements["study-name"].value,
      task: e.target.elements["task-name"].value,
      time: e.target.elements["exercise_time"].value,
    };

    if (onAddTask(formData)) {
      e.target.reset();
    }
  };

  return (
    <div className="form-container">
      <form className="task_fields" id="task_inputs" onSubmit={handleSubmit}>
        <label>
          {!lang ? "Day:" : "Dzień:"}
          <select className="day_task" name="day-task" required>
            <option value=""></option>
            {days.en.map((day, i) => (
              <option key={day} value={day}>
                {!lang ? days.en[i] : days.pl[i]}
              </option>
            ))}
          </select>
        </label>
        <label>
          {!lang ? "Study:" : "Nawyk:"}
          <select className="study" name="study-name" required>
            <option value=""></option>
            {habits.en.map((habit, i) => (
              <option key={habit} value={habit}>
                {!lang ? habits.en[i] : habits.pl[i]}
              </option>
            ))}
          </select>
        </label>
        <label>
          {!lang ? "Task name:" : "Nazwa zadania:"}
          <input className="task_name" name="task-name" type="text" placeholder="max.40 characters" maxLength={40} required />
        </label>
        <label>
          {!lang ? "Task time:" : "Czas zadania:"}
          <input
            className="task_time"
            type="number"
            id="exercise_time"
            name="exercise_time"
            step="5"
            min="0"
            max="60"
            placeholder="max. 60"
            required
          />{" "}
          min.
        </label>
        <button className="add_form" type="submit">
          {!lang ? "ADD" : "DODAJ"}
        </button>
      </form>
    </div>
  );
};

export default SectionAddTask;
