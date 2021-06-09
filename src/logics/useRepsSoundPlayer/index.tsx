import { useEffect, useRef } from 'react'
import useStepNumber from '../../components/templates/TimerTemplate/logics/useStepNumber'
import useToggle from '../../components/templates/TimerTemplate/logics/useToggle'

const DEFAULT_REPS = 10
const DEFAULT_INTERVAL = 30

const useRepsSoundPlayer = () => {
  const [isPlaying, togglePlaying] = useToggle(false)
  const loopTimer = useRef<number>()
  const targetReps = useRef<number>(DEFAULT_REPS)
  const targetInterval = useRef<number>(DEFAULT_INTERVAL)
  const [
    currentReps,
    { increment: incReps, decrement: decReps, setState: setReps },
  ] = useStepNumber(DEFAULT_REPS)
  const [currentInterval, { increment: incInterval, decrement: decInterval }] =
    useStepNumber(DEFAULT_INTERVAL)

  useEffect(() => {
    isPlaying ? setReps(0) : setReps(targetReps.current)
  }, [isPlaying])

  const play = () => {
    if (isPlaying) return
    togglePlaying()

    let internalCount = 0
    console.log('ready?')
    loopTimer.current = window.setInterval(async () => {
      internalCount++
      // TODO: Replace with sound.
      internalCount % 3 === 0 ? console.log('-') : console.log('.')

      // Increment display count when the internal count is 6
      if (internalCount === 6) {
        internalCount = 0
        const reps = await incReps()
        // TODO: Replace with sound.
        console.log(reps)

        if (reps >= targetReps.current) {
          window.clearInterval(loopTimer.current)
          // TODO: Go to next Reps
        }
      }
    }, 1000)
  }

  const stop = () => {
    if (!isPlaying) return
    togglePlaying()
    setReps(0)
    window.clearInterval(loopTimer.current)
  }

  const incrementReps = async () => {
    if (isPlaying) return
    const val = await incReps()
    targetReps.current = val
  }

  const decrementReps = async () => {
    if (isPlaying) return
    const val = await decReps()
    targetReps.current = val
  }

  const incrementInterval = () => {
    if (isPlaying) return
    targetInterval.current = currentInterval + 1
    incInterval()
  }

  const decrementInterval = () => {
    if (isPlaying) return
    targetInterval.current = currentInterval - 1
    decInterval()
  }

  return {
    play,
    stop,
    isPlaying,
    targetReps: targetReps.current,
    currentReps,
    targetInterval: targetInterval.current,
    currentInterval,
    incrementReps,
    decrementReps,
    incrementInterval,
    decrementInterval,
  } as const
}

export default useRepsSoundPlayer
