import { useRef, useState } from 'react'

const useTimer = (defaultTime?: number) => {
  const time = useRef(defaultTime || 0)
  const [currentTime, setCurrentTime] = useState(0)

  const setTime = (t: number) => {
    time.current = t
    setCurrentTime(t)
  }

  const timer = useRef<number>()
  const start = (onTimerDone: () => void) => {
    timer.current = window.setInterval(() => {
      setCurrentTime((prev) => {
        if (prev <= 0) {
          window.clearInterval(timer.current)
          onTimerDone()
          return time.current
        }
        return prev - 1
      })
    }, 1000)
  }

  const increment = () => {
    if (timer.current) return
    setCurrentTime((prev) => {
      if (prev >= 9999) return 9999
      const next = prev + 1
      time.current = next
      console.log(next)
      return next
    })
  }

  const decrement = () => {
    if (timer.current) return
    setCurrentTime((prev) => {
      if (prev === 0) return 0
      const next = prev - 1
      time.current = next
      return next
    })
  }

  const stop = () => {
    window.clearInterval(timer.current)
    setCurrentTime(time.current)
  }

  return { currentTime, setTime, start, stop, increment, decrement }
}

export default useTimer
