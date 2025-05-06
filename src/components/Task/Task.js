import { formatDistanceToNowStrict } from 'date-fns'
import PropTypes from 'prop-types'
import './Task.css'

function Task(props) {
  const { id, descr, status, onToggleComplete, onToggleEdit, onDelete, date } = props

  return (
    <div className="view">
      <input className="toggle" type="checkbox" defaultChecked={status || false} onClick={() => onToggleComplete(id)} />
      <label>
        <span className="description">{descr}</span>
        <span className="created">
          created{' '}
          {formatDistanceToNowStrict(date, new Date(), {
            addSuffix: true,
          })}{' '}
          ago
        </span>
      </label>
      <button className="icon icon-edit" onClick={() => onToggleEdit(id)} />
      <button className="icon icon-destroy" onClick={() => onDelete(id)} />
    </div>
  )
}
Task.propTypes = {
  id: PropTypes.number.isRequired,
  descr: PropTypes.string.isRequired,
  isCompleted: PropTypes.bool.isRequired,
  onToggleComplete: PropTypes.func,
  onDelete: PropTypes.func.isRequired,
}
export default Task
