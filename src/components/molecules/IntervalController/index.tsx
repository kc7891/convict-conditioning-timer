import { Box, Button, Flex, Text } from "@chakra-ui/react"
import React, { useEffect  } from "react"
import useTimer from "./logics/useTimer"

type Props = {
  playStatus: 'start' | 'pause' | 'freeze'
  onIntervalCountDone: () => void
}

const IntervalController:React.FC<Props> = ({onIntervalCountDone, playStatus}) => {
    const {currentTime, start, stop, increment, decrement} = useTimer(30)

    const incrementHandler = () => {
        if (playStatus === 'freeze') return
        increment()
    }

    const decrementHandler = () => {
        if (playStatus === 'freeze') return
        decrement()
    }

    useEffect(() => {
        ( playStatus === 'start' ) ? start(onIntervalCountDone) : stop()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[playStatus])

    return <Flex alignItems='center' justifyContent='space-around' fontWeight='bold'>
            <Text color='blackAlpha.800' fontSize='24px'>INTERVAL</Text>
            <Text color='blackAlpha.800' fontSize='24px' minWidth='80px' textAlign='right'>{currentTime}</Text>
            <Box>
                <Button onClick={decrementHandler} fontSize='24px' variant='solid' color='blackAlpha.800'>-</Button>
                <Button ml='3px' onClick={incrementHandler} fontSize='24px' variant='solid' color='blackAlpha.800'>+</Button>
            </Box>
        </Flex>
}

export default React.memo(IntervalController)