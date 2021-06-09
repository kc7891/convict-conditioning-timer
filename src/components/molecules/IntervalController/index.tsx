import { Box, Button, Flex, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import useTimer from './logics/useTimer'

type Props = {
  isPlaying: boolean
  onIncrement: () => void
  onDecrement: () => void
  currentInterval: number
}

// TODO: Fix this. Interval might be manage in useRepsSoundPlayer
const IntervalController: React.FC<Props> = ({
  onIncrement,
  onDecrement,
  currentInterval,
}) => {
  return (
    <Flex
      alignItems="center"
      justifyContent="space-around"
      fontWeight="bold"
      height="80px"
    >
      <Text color="blackAlpha.800" fontSize="24px">
        INTERVAL
      </Text>
      <Text
        color="blackAlpha.800"
        fontSize="24px"
        minWidth="80px"
        textAlign="right"
      >
        {currentInterval}
      </Text>
      <Box>
        <Button
          onClick={onDecrement}
          fontSize="24px"
          variant="solid"
          color="blackAlpha.800"
        >
          -
        </Button>
        <Button
          ml="3px"
          onClick={onIncrement}
          fontSize="24px"
          variant="solid"
          color="blackAlpha.800"
        >
          +
        </Button>
      </Box>
    </Flex>
  )
}

export default React.memo(IntervalController)
