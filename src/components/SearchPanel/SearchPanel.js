import { useState } from "react";
import "./SearchPanel.css";
const SearchPanel = ({ onAdd }) => {
  const [userInput, setUserInput] = useState("");
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      onAdd({
        id: 3,
        descr: event.target.value,
        isEditing: false,
        isCompleted: false,
        date: new Date(),
      });
      setUserInput("");
    }
  };
  return (
    <input
      className="new-todo"
      placeholder="What needs to be done?"
      autoFocus
      onKeyDown={(e) => handleKeyPress(e)}
      onChange={(e) => setUserInput(e.target.value)}
      value={userInput}
    />
  );
};
export default SearchPanel;
