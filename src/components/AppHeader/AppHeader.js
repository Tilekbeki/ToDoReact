import SearchPanel from "../SearchPanel/SearchPanel";
import "./AppHeader.css";
const AppHeader = () => {
  return (
    <header className="header">
      <h1>todos</h1>
      <SearchPanel />
    </header>
  );
};

export default AppHeader;
