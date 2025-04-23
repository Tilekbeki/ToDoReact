import Task from "../Task";
import "./TaskList.css";

const EditingInput = () => {
  return <input type="text" className="edit" value="Editing task" />;
};

const TaskList = ({ todos, onToggleComplete, onToggleEdit, onDelete }) => {
  const elements = todos.map((item) => {
    const { id, descr, isCompleted, isEditing } = item;
    let classStyled;
    if (isEditing) classStyled = "editing";
    if (isCompleted) classStyled = "completed";
    return (
      <li key={id} className={classStyled || null}>
        <Task
          id={id}
          status={isCompleted}
          descr={descr}
          onToggleComplete={onToggleComplete}
          onToggleEdit={onToggleEdit}
          onDelete={onDelete}
        />
        {isEditing ? <EditingInput /> : null}
      </li>
    );
  });
  return <ul className="todo-list">{elements}</ul>;
};

export default TaskList;
