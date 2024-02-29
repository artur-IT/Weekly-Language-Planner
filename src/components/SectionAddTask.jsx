/* eslint-disable react/prop-types */
const AddTaskSection = (props) => {
  return (
    <div className="form-container">
      <form className="task_fields" id="task_inputs">
        <label>
          {!props.switch ? "Day:" : "Dzień:"}
          <select className="day_task" name="day-task">
            <option></option>
            <option value={"Monday"}>{!props.switch ? props.days.en[0] : props.days.pl[0]}</option>
            <option value={"Tuesday"}>{!props.switch ? props.days.en[1] : props.days.pl[1]}</option>
            <option value={"Wednesday"}>{!props.switch ? props.days.en[2] : props.days.pl[2]}</option>
            <option value={"Thursday"}>{!props.switch ? props.days.en[3] : props.days.pl[3]}</option>
            <option value={"Friday"}>{!props.switch ? props.days.en[4] : props.days.pl[4]}</option>
            <option value={"Saturday"}>{!props.switch ? props.days.en[5] : props.days.pl[5]}</option>
            <option value={"Sunday"}>{!props.switch ? props.days.en[6] : props.days.pl[6]}</option>
          </select>
        </label>
        <label>
          {!props.switch ? "Study:" : "Nawyk:"}
          <select className="study" name="study-name">
            <option></option>
            <option value={"SPEAKING"}>{!props.switch ? props.habits.en[0] : props.habits.pl[0]}</option>
            <option value={"READING"}>{!props.switch ? props.habits.en[1] : props.habits.pl[1]}</option>
            <option value={"WRITING"}>{!props.switch ? props.habits.en[2] : props.habits.pl[2]}</option>
            <option value={"LISTENING"}>{!props.switch ? props.habits.en[3] : props.habits.pl[3]}</option>
            <option value={"VOCABULARY"}>{!props.switch ? props.habits.en[4] : props.habits.pl[4]}</option>
          </select>
        </label>
        <label>
          {!props.switch ? "Task name:" : "Nazwa zadania:"}
          <input className="task_name" name="task-name" type="text" placeholder="task name..." />
        </label>
        <label>
          {!props.switch ? "Task time:" : "Czas zadania:"}
          <input className="task_time" type="number" id="exercise_time" step="5" min="0" max="60" placeholder="max. 60" /> min.
        </label>
        <button className="add_form" onClick={props.btnAdd}>
          {!props.switch ? "ADD" : "DODAJ"}
        </button>
      </form>
    </div>
  );
};

export default AddTaskSection;
