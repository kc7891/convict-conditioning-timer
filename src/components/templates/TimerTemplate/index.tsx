import IntervalController from '../../molecules/IntervalController'
import { Box, Button } from '@chakra-ui/react'
import React, { useState } from 'react'

export type PlayStatus = 'playing' | 'stopped' | 'intervalStarted'

const TimerTemplate: React.FC = () => {
  const [soundOptions, setSoundOptions] = useState({ sound: true, voice: true })
  const [targetReps, setTargetReps] = useState(10)
  const [currentReps, setCurrentReps] = useState(0)
  const [playStatus, setPlayStatus] = useState<PlayStatus>('stopped')

  return (
    <Box
      backgroundColor="rgba(255,255,255, 0.5)"
      width="100%"
      maxWidth="500px"
      height="100%"
      maxHeight="800px"
    >
      <IntervalController
        playStatus={playStatus}
        onIntervalCountDone={() => null}
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
