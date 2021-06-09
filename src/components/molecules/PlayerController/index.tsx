import { Button, Flex } from '@chakra-ui/react'
import { ComponentProps } from 'react'

type Props = {
  isPlaying: boolean
  onPlay: () => void
  onStop: () => void
}

const LargeButton: React.FC<ComponentProps<typeof Button>> = ({
  children,
  ...props
}) => {
  return (
    <Button {...props} color="blackAlpha.800" width="280px" fontWeight="bold">
      {children}
    </Button>
  )
}

const PlayerController: React.FC<Props> = ({ onPlay, onStop, isPlaying }) => {
  return (
    <Flex height="60px" alignItems="center" justifyContent="center">
      {!isPlaying ? (
        <LargeButton onClick={onPlay}>PLAY</LargeButton>
      ) : (
        <LargeButton onClick={onStop}>STOP</LargeButton>
      )}
    </Flex>
  )
}

export default PlayerController
