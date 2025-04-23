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
  const [displayData, setDisplayData] = useState(todoData);
  const [count, setCount] = useState(todoData.length);
  const toggleProperty = (arr, id, propName) => {
    console.log(arr, id, propName);
    let copy = todoData.map((el) =>
      el.id === id ? { ...el, [propName]: !el[propName] } : el
    );
    setTodoData(copy);
    setDisplayData(copy);
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
    setDisplayData(copy);
  };
  const onAdd = (newItem) => {
    let copy = todoData;
    setTodoData([...copy, newItem]);
    setDisplayData([...copy, newItem]);
  };
  const Counter = (arr) => {
    setCount(arr.length);
    console.log(arr.length);
  };
  const onToggleFilter = (category) => {
    if (category === "all") {
      setDisplayData(todoData);
      Counter(todoData);
      return;
    }
    const isCompleted = category === "done";
    setDisplayData(todoData.filter((el) => el.isCompleted === isCompleted));
    Counter(todoData.filter((el) => el.isCompleted === isCompleted));
  };
  const onDeleteByCompleted = () => {
    let copy = todoData.filter((el) => !el.isCompleted);
    setTodoData(copy);
    setDisplayData(copy);
  };
  return (
    <div className="todoapp">
      <AppHeader toDo={1} done={3} onAdd={onAdd} />
      <main>
        <TaskList
          onDelete={onDelete}
          todos={displayData}
          onToggleComplete={onToggleComplete}
          onToggleEdit={onToggleEdit}
        />
      </main>
      <Footer
        count={count}
        onDeleteByCompleted={onDeleteByCompleted}
        onToggleFilter={onToggleFilter}
      />
    </div>
  );
};
export default App;
