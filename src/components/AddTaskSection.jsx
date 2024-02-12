const AddTaskSection = () => {
  return (
    <form action="">
      <label>Day:</label>
      <select className="day_task" name="day-task">
        <option>Monday</option>
        <option>Tuesday</option>
        <option>Wednesday</option>
        <option>Thursday</option>
        <option>Friday</option>
        <option>Saturday</option>
        <option>Sunday</option>
      </select>
      <label>Study:</label>
      <select className="study" name="study-name">
        <option>SPEAKING</option>
        <option>READING</option>
        <option>WRITING</option>
        <option>LISTENING</option>
        <option>VOCABULARY</option>
      </select>
      <label>Task name:</label>
      <input className="task_name" name="task-name" type="text" placeholder="task name..." />
      <label>Task time:</label>
      <input className="task_time" type="number" id="exercise_time" step="5" min="0" max="60" placeholder="max. 60" /> min.
      <button className="add_form">Dodaj</button>
    </form>
  );
};

export default AddTaskSection;
