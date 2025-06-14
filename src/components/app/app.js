import { useState } from 'react'

import AppHeader from '../AppHeader'
import TaskList from '../TaskList'
import Footer from '../Footer'
import './app.css'

function App() {
  const [todoData, setTodoData] = useState([
    {
      id: '1',
      descr: 'Отжюмания',
      isEditing: false,
      isCompleted: false,
      date: new Date('2025-04-24T20:24:00'),
      timer: {
        seconds: 0,
        isRunning: false,
      },
    },
    {
      id: '2',
      descr: 'Пресс качат',
      isEditing: false,
      isCompleted: false,
      date: new Date('2025-04-24T21:44:00'),
      timer: {
        seconds: 0,
        isRunning: false,
      },
    },
    {
      id: '3',
      descr: 'Duolingo урок',
      isEditing: false,
      isCompleted: false,
      date: new Date('2025-04-24T21:50:00'),
      timer: {
        seconds: 0,
        isRunning: false,
      },
    },
  ])
  const [displayData, setDisplayData] = useState(todoData)
  const [count, setCount] = useState(todoData.length)
  const [activeFilter, setActiveFilter] = useState('All')
  const [lastId, setLastId] = useState(todoData.length)

  const toggleProperty = (id, propName) => {
    const copy = todoData.map((el) => (el.id === id ? { ...el, [propName]: !el[propName] } : el))

    setTodoData(copy)
    setDisplayData(copy)
  }

  const onToggleComplete = (id) => {
    toggleProperty(id, 'isCompleted')
  }

  const onToggleEdit = (id) => {
    const element = todoData.find((el) => el.id === id)
    if (!element.isCompleted) {
      toggleProperty(id, 'isEditing')
    }
  }

  const onDelete = (id) => {
    const copy = todoData.filter((el) => el.id !== id)
    setTodoData(copy)
    setDisplayData(copy)
    Counter(copy)
  }

  const onAdd = (newItem) => {
    const copy = todoData
    const newId = lastId + 1
    const newData = [
      ...copy,
      {
        ...newItem,
        id: newId,
        timer: {
          seconds: 0,
          isRunning: false,
        },
      },
    ]

    setTodoData(newData)
    setDisplayData(newData)
    Counter(newData)
    setLastId(newId)
  }

  const onEdit = (id, newDescr) => {
    const copy = todoData.map((el) => {
      if (el.id === id) {
        el.descr = newDescr
        el.isEditing = false
      }
      return el
    })

    setTodoData(copy)
    setDisplayData(copy)
  }

  const Counter = (arr) => {
    setCount(arr.length)
  }

  const onToggleFilter = (category) => {
    if (category === 'All') {
      setDisplayData(todoData)
      Counter(todoData)
      setActiveFilter('All')
      return
    }

    const isCompleted = category === 'Completed'

    if (isCompleted) {
      setActiveFilter('Completed')
    } else {
      setActiveFilter('Active')
    }

    setDisplayData(todoData.filter((el) => el.isCompleted === isCompleted))
    Counter(todoData.filter((el) => el.isCompleted === isCompleted))
  }

  const onDeleteByCompleted = () => {
    const copy = todoData.filter((el) => !el.isCompleted)
    setTodoData(copy)
    setDisplayData(copy)
    Counter(copy)
  }
  const updateTaskTimer = (id, newTimerData) => {
    console.log(newTimerData)
    setTodoData((prev) =>
      prev.map((task) => (task.id === id ? { ...task, timer: { ...task.timer, ...newTimerData } } : task))
    )
    setDisplayData((prev) =>
      prev.map((task) => (task.id === id ? { ...task, timer: { ...task.timer, ...newTimerData } } : task))
    )
  }
  return (
    <div className="todoapp">
      <AppHeader toDo={1} done={3} onAdd={onAdd} />
      <main>
        <TaskList
          onDelete={onDelete}
          onEdit={onEdit}
          todos={displayData}
          onToggleComplete={onToggleComplete}
          onToggleEdit={onToggleEdit}
          updateTaskTimer={updateTaskTimer}
        />
      </main>
      <Footer
        activeFilter={activeFilter}
        count={count}
        onDeleteByCompleted={onDeleteByCompleted}
        onToggleFilter={onToggleFilter}
      />
    </div>
  )
}
export default App
