import { Flex } from '@chakra-ui/react'
import { ChakraProvider } from '@chakra-ui/react'
import TimerTemplate from './components/templates/TimerTemplate'

function App() {
  return (
    <ChakraProvider>
      <main>
        <Flex
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          height="100vh"
          justifyContent="center"
          alignItems="center"
        >
          <TimerTemplate />
        </Flex>
      </main>
    </ChakraProvider>
  )
}

export default App
