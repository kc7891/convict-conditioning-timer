import { Box, Button } from '@chakra-ui/react'
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
    <Button {...props} color="blackAlpha.800" width="280px">
      {children}
    </Button>
  )
}

const PlayerController: React.FC<Props> = ({ onPlay, onStop, status }) => {
  return (
    <Box textAlign="center">
      {status === 'stopped' ? (
        <LargeButton onClick={onPlay}>Play</LargeButton>
      ) : (
        <LargeButton onClick={onStop}>Stop</LargeButton>
      )}
    </Box>
  )
}

export default PlayerController
