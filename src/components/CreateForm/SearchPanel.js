import { useState } from 'react'
import './SearchPanel.css'

function SearchPanel({ onAdd }) {
  const [userInput, setUserInput] = useState('')
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  const handleKeyPress = (event) => {
    if (event.key === 'Enter' && userInput) {
      event.preventDefault()

      onAdd({
        id: Date.now(),
        descr: userInput,
        timer: {
          seconds: +minutes * 60 + +seconds,
          isRunning: false,
        },
        isEditing: false,
        isCompleted: false,
        date: new Date(),
      })

      setUserInput('')
      setMinutes('')
      setSeconds('')
    }
  }

  const handleSecondsChange = (e) => {
    const value = e.target.value
    const number = parseInt(value, 10)
    if (value === '' || (number >= 0 && number <= 59)) {
      setSeconds(value)
    }
  }

  const handleMinutesChange = (e) => {
    const value = e.target.value
    const number = parseInt(value, 10)
    if (value === '' || number >= 0) {
      setMinutes(value)
    }
  }

  return (
    <form className="new-todo-form">
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        onKeyDown={handleKeyPress}
        onChange={(e) => setUserInput(e.target.value)}
        value={userInput}
        autoFocus
      />
      <input
        className="new-todo-form__timer"
        type="number"
        placeholder="Min"
        onChange={handleMinutesChange}
        value={minutes}
        min="0"
      />
      <input
        className="new-todo-form__timer"
        type="number"
        placeholder="Sec"
        onChange={handleSecondsChange}
        value={seconds}
        min="0"
        max="59"
        onKeyDown={handleKeyPress}
      />
    </form>
  )
}

export default SearchPanel
