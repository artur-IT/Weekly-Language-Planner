/* eslint-disable react/prop-types */
const AddTaskSection = (props) => {
  const lang = props.switch;
  const days = props.days;
  const habits = props.habits;
  return (
    <div className="form-container">
      <form className="task_fields" id="task_inputs">
        <label>
          {!lang ? "Day:" : "Dzień:"}
          <select className="day_task" name="day-task">
            <option></option>
            <option value={"Monday"}>{!lang ? days.en[0] : days.pl[0]}</option>
            <option value={"Tuesday"}>{!lang ? days.en[1] : days.pl[1]}</option>
            <option value={"Wednesday"}>{!lang ? days.en[2] : days.pl[2]}</option>
            <option value={"Thursday"}>{!lang ? days.en[3] : days.pl[3]}</option>
            <option value={"Friday"}>{!lang ? days.en[4] : days.pl[4]}</option>
            <option value={"Saturday"}>{!lang ? days.en[5] : days.pl[5]}</option>
            <option value={"Sunday"}>{!lang ? days.en[6] : days.pl[6]}</option>
          </select>
        </label>
        <label>
          {!lang ? "Study:" : "Nawyk:"}
          <select className="study" name="study-name">
            <option></option>
            <option value={"SPEAKING"}>{!lang ? habits.en[0] : habits.pl[0]}</option>
            <option value={"READING"}>{!lang ? habits.en[1] : habits.pl[1]}</option>
            <option value={"WRITING"}>{!lang ? habits.en[2] : habits.pl[2]}</option>
            <option value={"LISTENING"}>{!lang ? habits.en[3] : habits.pl[3]}</option>
            <option value={"VOCABULARY"}>{!lang ? habits.en[4] : habits.pl[4]}</option>
          </select>
        </label>
        <label>
          {!lang ? "Task name:" : "Nazwa zadania:"}
          <input className="task_name" name="task-name" type="text" placeholder="task name..." />
        </label>
        <label>
          {!lang ? "Task time:" : "Czas zadania:"}
          <input className="task_time" type="number" id="exercise_time" step="5" min="0" max="60" placeholder="max. 60" /> min.
        </label>
        <button className="add_form" onClick={props.btnAdd}>
          {!lang ? "ADD" : "DODAJ"}
        </button>
      </form>
    </div>
  );
};

export default AddTaskSection;
