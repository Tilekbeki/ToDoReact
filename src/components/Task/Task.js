import "./Task.css";

const Task = (props) => {
  const { id, descr, status, onToggleComplete, onToggleEdit, onDelete } = props;

  return (
    <div className="view">
      <input
        className="toggle"
        type="checkbox"
        checked={status || false}
        onClick={() => onToggleComplete(id)}
      />
      <label>
        <span className="description">{descr}</span>
        <span className="created">created 5 minutes ago</span>
      </label>
      <button
        className="icon icon-edit"
        onClick={() => onToggleEdit(id)}
      ></button>
      <button
        className="icon icon-destroy"
        onClick={() => onDelete(id)}
      ></button>
    </div>
  );
};

export default Task;
