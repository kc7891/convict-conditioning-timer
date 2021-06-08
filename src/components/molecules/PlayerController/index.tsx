import { Button, Flex } from '@chakra-ui/react'
import { ComponentProps } from 'react'
import { PlayStatus } from '../../templates/TimerTemplate'

type Props = {
  status: Extract<PlayStatus, 'playing' | 'stopped'>
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

const PlayerController: React.FC<Props> = ({ onPlay, onStop, status }) => {
  return (
    <Flex height="60px" alignItems="center" justifyContent="center">
      {status === 'stopped' ? (
        <LargeButton onClick={onPlay}>PLAY</LargeButton>
      ) : (
        <LargeButton onClick={onStop}>STOP</LargeButton>
      )}
    </Flex>
  )
}

export default PlayerController
