import { useEffect, useRef } from 'react'
import './Timer.css'

const Timer = ({ seconds, isRunning, onToggle, onTick }) => {
  const intervalRef = useRef(null)
  const secondsRef = useRef(seconds)

  // обновляем ссылку на секунды при каждом ререндере
  useEffect(() => {
    secondsRef.current = seconds
  }, [seconds])

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        if (secondsRef.current > 0) {
          onTick()
        } else {
          clearInterval(intervalRef.current)
        }
      }, 1000)
    } else {
      clearInterval(intervalRef.current)
    }

    return () => clearInterval(intervalRef.current)
  }, [isRunning, onTick])

  const formatTime = () => {
    console.log(seconds)
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`
  }

  return (
    <div className="timer">
      <button onClick={onToggle} className={isRunning ? 'icon icon-pause' : 'icon icon-play'} />
      <span className="time">{formatTime()}</span>
    </div>
  )
}

export default Timer
