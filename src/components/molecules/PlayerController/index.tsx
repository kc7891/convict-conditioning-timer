import { Box, Button } from '@chakra-ui/react'
import { PlayStatus } from '../../templates/TimerTemplate'

type Props = {
  status: PlayStatus
  onPlay: () => void
  onStop: () => void
}

const PlayerController: React.FC<Props> = ({ onPlay, onStop, status }) => {
  return (
    <Box>
      {status === 'stopped' ? (
        <Button onClick={onPlay}>Play</Button>
      ) : (
        <Button onClick={onStop}>Stop</Button>
      )}
    </Box>
  )
}

export default PlayerController
