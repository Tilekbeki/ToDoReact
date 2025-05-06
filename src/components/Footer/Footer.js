import TasksFilter from '../TasksFilter/TasksFilter';
import './Footer.css';

function Footer({
  activeFilter,
  count,
  onToggleFilter,
  onDeleteByCompleted,
}) {
  return (
    <footer className="footer">
      <span className="todo-count">
        {count}
        {' '}
        items left
      </span>
      <TasksFilter
        activeFilter={activeFilter}
        onToggleFilter={onToggleFilter}
      />
      <button className="clear-completed" onClick={() => onDeleteByCompleted()}>
        Clear completed
      </button>
    </footer>
  );
}

export default Footer;
