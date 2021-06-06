import IntervalController from "../../molecules/IntervalController"
import {Box, Button} from '@chakra-ui/react'
import React, { useState } from "react"

type PlayStatus = 'freeze' | 'start' | 'pause'

const TimerTemplate:React.FC = () => {
    const [soundOptions, setSoundOptions] = useState({sound: true, voice: true})
    const [targetReps, setTargetReps] = useState(10)
    const [currentReps, setCurrentReps] = useState(0)
    const [playStatus, setPlayStatus] = useState<PlayStatus>('freeze')

    return <Box backgroundColor='rgba(255,255,255, 0.5)' width='100%' maxWidth='500px' height='100%' maxHeight='800px'>
        <IntervalController
          playStatus={playStatus}
          onIntervalCountDone={() => null}
        />
        <div>
            {/* For debug */}
            <Button onClick={() => setPlayStatus('freeze')} color='blackAlpha.800'>freeze</Button>
            <Button onClick={() => setPlayStatus('start')} color='blackAlpha.800'>start</Button>
            <Button onClick={() => setPlayStatus('pause')} color='blackAlpha.800'>pause</Button>
        </div>
    </Box>
}

export default TimerTemplate