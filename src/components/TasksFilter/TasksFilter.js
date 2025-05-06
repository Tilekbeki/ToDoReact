import './TasksFilter.css';

function TasksFilter({
  activeFilter = 'All',
  onToggleFilter = () => console.log('Filter clicked (default)'),
}) {
  const filterOptions = ['All', 'Active', 'Completed'];
  return (
    <ul className="filters">
      {filterOptions.map((option) => (
        <li key={option}>
          <button
            className={option === activeFilter ? 'selected' : null}
            onClick={() => onToggleFilter(option)}
          >
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TasksFilter;
