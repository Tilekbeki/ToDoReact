import Task from '../Task'
import './TaskList.css'

function TaskList({ todos, onToggleComplete, onToggleEdit, onDelete, onEdit }) {
  function EditingInput({ descr, id = 0 }) {
    return <input type="text" className="edit" defaultValue={descr} onKeyDown={(e) => handleKeyPress(e, id)} />
  }
  const handleKeyPress = (event, selectedId = 0) => {
    if (event.key === 'Enter') {
      onEdit(selectedId, event.target.value)
    }
  }
  const elements = todos
    .filter((item) => item && item.id) // Skip invalid items
    .map((item) => {
      const { id, descr, isCompleted, isEditing, date } = item
      let classStyled
      if (isEditing) classStyled = 'editing'
      if (isCompleted) classStyled = 'completed'
      return (
        <li key={id} className={classStyled || null}>
          <Task
            id={id}
            status={isCompleted}
            descr={descr}
            onToggleComplete={onToggleComplete}
            onToggleEdit={onToggleEdit}
            onDelete={onDelete}
            date={date}
          />
          {isEditing ? <EditingInput descr={descr} id={id} /> : null}
        </li>
      )
    })
  return <ul className="todo-list">{elements}</ul>
}

export default TaskList
