import { Box, Button, Flex, Text } from '@chakra-ui/react'
import React from 'react'

type Props = {
  reps: number
  onIncrementReps: () => void
  onDecrementReps: () => void
}

const RepsController: React.FC<Props> = ({
  reps,
  onIncrementReps,
  onDecrementReps,
}) => {
  return (
    <Flex
      alignItems="center"
      justifyContent="space-around"
      fontWeight="bold"
      height="80px"
    >
      <Text color="blackAlpha.800" fontSize="24px">
        REPS
      </Text>
      <Text
        color="blackAlpha.800"
        fontSize="24px"
        minWidth="80px"
        textAlign="right"
      >
        {reps}
      </Text>
      <Box>
        <Button
          onClick={onDecrementReps}
          fontSize="24px"
          variant="solid"
          color="blackAlpha.800"
        >
          -
        </Button>
        <Button
          ml="3px"
          onClick={onIncrementReps}
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

export default RepsController
