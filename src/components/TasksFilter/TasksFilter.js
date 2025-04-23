import "./TasksFilter.css";
const TasksFilter = ({ onToggleFilter }) => {
  return (
    <ul className="filters">
      <li>
        <button className="selected" onClick={() => onToggleFilter("all")}>
          All
        </button>
      </li>
      <li>
        <button onClick={() => onToggleFilter("active")}>Active</button>
      </li>
      <li>
        <button onClick={() => onToggleFilter("done")}>Completed</button>
      </li>
    </ul>
  );
};

export default TasksFilter;
