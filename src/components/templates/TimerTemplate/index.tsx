import IntervalController from '../../molecules/IntervalController'
import { Box, Flex } from '@chakra-ui/react'
import React, { useState } from 'react'
import PlayerController from '../../molecules/PlayerController'
import RepsController from '../../molecules/RepsController'
import { SoundToggleBar } from '../../molecules/SoundToggleBar'
import useToggle from './logics/useToggle'

export type PlayStatus = 'playing' | 'stopped' | 'intervalStarted'

const TimerTemplate: React.FC = () => {
  const [soundOn, toggleSound] = useToggle(true)
  const [voiceOn, toggleVoice] = useToggle(true)
  const [targetReps, setTargetReps] = useState(10)
  const [playStatus, setPlayStatus] = useState<PlayStatus>('stopped')

  const incrementReps = () => {
    if (playStatus !== 'stopped') return
    setTargetReps((prev) => {
      if (prev >= 999) return 999
      return prev + 1
    })
  }

  const decrementReps = () => {
    if (playStatus !== 'stopped') return
    setTargetReps((prev) => {
      if (prev <= 1) return 1
      return prev - 1
    })
  }

  return (
    <Flex
      backgroundColor="rgba(255,255,255, 0.5)"
      width="95vw"
      maxWidth="500px"
      flexDir="column"
    >
      <SoundToggleBar
        soundOn={soundOn}
        toggleSound={toggleSound}
        voiceOn={voiceOn}
        toggleVoice={toggleVoice}
      />
      <RepsController
        reps={targetReps}
        onDecrementReps={decrementReps}
        onIncrementReps={incrementReps}
      />
      <IntervalController
        playStatus={playStatus}
        onIntervalCountDone={() => null}
      />
      <PlayerController
        status={playStatus === 'stopped' ? 'stopped' : 'playing'}
        onPlay={() => setPlayStatus('playing')}
        onStop={() => setPlayStatus('stopped')}
      />
      <Box paddingBottom="10px" />
    </Flex>
  )
}

export default TimerTemplate
