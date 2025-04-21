import AppHeader from "../AppHeader";
import TaskList from "../TaskList";
import Footer from "../Footer";
import { useState } from "react";
import "./app.css";
const App = () => {
  const [todoData, setTodoData] = useState([
    {
      id: 1,
      descr: "Drink Coffee",
      isEditing: false,
      isCompleted: false,
      date: new Date(),
    },
    {
      id: 2,
      descr: "Build React App",
      isEditing: false,
      isCompleted: false,
      date: new Date(),
    },
  ]);
  const toggleProperty = (arr, id, propName) => {
    console.log(arr, id, propName);
    let copy = todoData.map((el) =>
      el.id === id ? { ...el, [propName]: !el[propName] } : el
    );
    setTodoData(copy);
  };
  const onToggleComplete = (id) => {
    toggleProperty([1], id, "isCompleted");
  };
  const onToggleEdit = (id) => {
    toggleProperty([1], id, "isEditing");
  };

  const onDelete = (id) => {
    let copy = todoData.filter((el) => el.id !== id);
    setTodoData(copy);
  };
  return (
    <div className="todoapp">
      <AppHeader toDo={1} done={3} />
      <main>
        <TaskList
          onDelete={onDelete}
          todos={todoData}
          onToggleComplete={onToggleComplete}
          onToggleEdit={onToggleEdit}
        />
      </main>
      <Footer />
    </div>
  );
};
export default App;
