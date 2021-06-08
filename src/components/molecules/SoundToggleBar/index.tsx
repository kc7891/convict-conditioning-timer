import { Flex, Text, Switch } from '@chakra-ui/react'

type Props = {
  soundOn: boolean
  toggleSound: () => void
  voiceOn: boolean
  toggleVoice: () => void
}

export const SoundToggleBar: React.FC<Props> = ({
  soundOn,
  toggleSound,
  voiceOn,
  toggleVoice,
}) => {
  return (
    <Flex
      justifyContent="space-evenly"
      height="60px"
      alignContent="center"
      alignItems="center"
    >
      <Text color="blackAlpha.800" fontWeight="bold">
        SOUND
      </Text>
      <Switch
        size="lg"
        isChecked={soundOn}
        onChange={toggleSound}
        colorScheme="purple"
      />
      <Text color="blackAlpha.800" fontWeight="bold">
        VOICE
      </Text>
      <Switch
        size="lg"
        isChecked={voiceOn}
        onChange={toggleVoice}
        colorScheme="purple"
      />
    </Flex>
  )
}
