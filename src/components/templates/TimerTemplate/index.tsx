// import IntervalController from '../../molecules/IntervalController'
import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import PlayerController from '../../molecules/PlayerController'
import RepsController from '../../molecules/RepsController'
// import { SoundToggleBar } from '../../molecules/SoundToggleBar'
// import useToggle from './logics/useToggle'
import useRepsSoundPlayer from '../../../logics/useRepsSoundPlayer'

export type PlayStatus = 'playing' | 'stopped' | 'intervalStarted'

const TimerTemplate: React.FC = () => {
  // const [soundOn, toggleSound] = useToggle(true)
  // const [voiceOn, toggleVoice] = useToggle(true)
  const {
    play,
    stop,
    isPlaying,
    currentReps,
    // currentInterval,
    incrementReps,
    decrementReps,
    // incrementInterval,
    // decrementInterval,
    renderAudioTag,
  } = useRepsSoundPlayer()

  return (
    <Flex
      backgroundColor="rgba(255,255,255, 0.5)"
      width="95vw"
      maxWidth="500px"
      flexDir="column"
    >
      {/* <SoundToggleBar
        soundOn={soundOn}
        toggleSound={toggleSound}
        voiceOn={voiceOn}
        toggleVoice={toggleVoice}
      /> */}
      <RepsController
        isPlaying={isPlaying}
        currentReps={currentReps}
        onDecrementReps={decrementReps}
        onIncrementReps={incrementReps}
      />
      {/* <IntervalController
        isPlaying={isPlaying}
        onIncrement={incrementInterval}
        onDecrement={decrementInterval}
        currentInterval={currentInterval}
      /> */}
      <PlayerController isPlaying={isPlaying} onPlay={play} onStop={stop} />
      <Box paddingBottom="10px" />
      {renderAudioTag()}
    </Flex>
  )
}

export default TimerTemplate
