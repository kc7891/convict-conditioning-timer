import { useEffect, useRef } from 'react'
import { playVoice } from '../../components/templates/TimerTemplate/logics/playVoice'
import useStepNumber from '../../components/templates/TimerTemplate/logics/useStepNumber'
import useToggle from '../../components/templates/TimerTemplate/logics/useToggle'

const DEFAULT_REPS = 10
const DEFAULT_INTERVAL = 30

const useRepsSoundPlayer = () => {
  const [isPlaying, togglePlaying] = useToggle(false)
  const soundARef = useRef<HTMLAudioElement>(null)
  const soundA2Ref = useRef<HTMLAudioElement>(null)
  const soundBRef = useRef<HTMLAudioElement>(null)
  const soundLoopTimer = useRef<number>()
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
    setReps(0)
    playVoice('Are you ready?')
    soundLoopTimer.current = window.setInterval(async () => {
      internalCount++
      // TODO: Replace with sound.
      internalCount % 3 === 0
        ? soundBRef.current?.play()
        : internalCount % 2 === 0
        ? soundARef.current?.play()
        : soundA2Ref.current?.play()

      // Increment display count when the internal count is 6
      if (internalCount === 6) {
        internalCount = 0
        const reps = await incReps()
        if (reps <= targetReps.current) playVoice(`${reps}`)

        if (reps >= targetReps.current + 1) {
          togglePlaying()
          window.clearInterval(soundLoopTimer.current)
          playVoice('Take a rest')
        }
      }
    }, 1000)
  }

  // useEffect(() => {
  //   if (currentReps === targetReps.current) {
  //     play()
  //   }
  // }, [currentReps, targetReps.current])

  const stop = () => {
    if (!isPlaying) return
    window.clearInterval(soundLoopTimer.current)
    togglePlaying()
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

  const renderAudioTag = () => {
    return (
      <div>
        <audio ref={soundARef} src="/assets/one.mp3" />
        <audio ref={soundA2Ref} src="/assets/one.mp3" />
        <audio ref={soundBRef} src="/assets/two.mp3" />
      </div>
    )
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
    renderAudioTag,
  } as const
}

export default useRepsSoundPlayer
