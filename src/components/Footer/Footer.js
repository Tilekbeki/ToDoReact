import TasksFilter from "../TasksFilter/TasksFilter";
import "./Footer.css";
const Footer = ({ count, onToggleFilter, onDeleteByCompleted }) => {
  return (
    <footer className="footer">
      <span className="todo-count">{count} items left</span>
      <TasksFilter onToggleFilter={onToggleFilter} />
      <button className="clear-completed" onClick={() => onDeleteByCompleted()}>
        Clear completed
      </button>
    </footer>
  );
};

export default Footer;
