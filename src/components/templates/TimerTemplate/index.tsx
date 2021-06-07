import IntervalController from '../../molecules/IntervalController'
import { Box, Button } from '@chakra-ui/react'
import React, { useState } from 'react'
import PlayerController from '../../molecules/PlayerController'
import RepsController from '../../molecules/RepsController'

export type PlayStatus = 'playing' | 'stopped' | 'intervalStarted'

const TimerTemplate: React.FC = () => {
  const [soundOptions, setSoundOptions] = useState({ sound: true, voice: true })
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
    <Box
      backgroundColor="rgba(255,255,255, 0.5)"
      width="100%"
      maxWidth="500px"
      height="100%"
      maxHeight="800px"
    >
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
      <div>
        {/* For debug */}
        <Button onClick={() => setPlayStatus('playing')} color="blackAlpha.800">
          start
        </Button>
        <Button onClick={() => setPlayStatus('stopped')} color="blackAlpha.800">
          stop
        </Button>
        <Button
          onClick={() => setPlayStatus('intervalStarted')}
          color="blackAlpha.800"
        >
          interval
        </Button>
      </div>
    </Box>
  )
}

export default TimerTemplate
