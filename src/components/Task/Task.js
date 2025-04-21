import "./Task.css";

const Task = (props) => {
  const { id, descr, onToggleComplete, onToggleEdit, onDelete } = props;

  return (
    <div className="view">
      <input
        className="toggle"
        type="checkbox"
        onClick={() => onToggleComplete(id)}
      />
      <label>
        <span className="description">{descr} asdas</span>
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
