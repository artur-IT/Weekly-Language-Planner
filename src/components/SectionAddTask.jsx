/* eslint-disable react/prop-types */
const AddTaskSection = (props) => {
  return (
    <div className="form-container">
      <form className="task_fields" id="task_inputs">
        <label>
          {!props.switch ? "Day:" : "Dzień:"}
          <select className="day_task" name="day-task">
            <option></option>
            <option>Monday</option>
            <option>Tuesday</option>
            <option>Wednesday</option>
            <option>Thursday</option>
            <option>Friday</option>
            <option>Saturday</option>
            <option>Sunday</option>
          </select>
        </label>
        <label>
          {!props.switch ? "Study:" : "Nawyk:"}
          <select className="study" name="study-name">
            <option></option>
            <option>SPEAKING</option>
            <option>READING</option>
            <option>WRITING</option>
            <option>LISTENING</option>
            <option>VOCABULARY</option>
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
        <button className="add_form"> {!props.switch ? "ADD" : "DODAJ"}</button>
      </form>
    </div>
  );
};

export default AddTaskSection;
