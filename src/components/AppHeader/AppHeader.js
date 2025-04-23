import SearchPanel from "../SearchPanel/SearchPanel";
import "./AppHeader.css";
const AppHeader = ({ onAdd }) => {
  return (
    <header className="header">
      <h1>todos</h1>
      <SearchPanel onAdd={onAdd} />
    </header>
  );
};

export default AppHeader;
