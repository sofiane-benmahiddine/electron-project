import { ChakraProvider } from '@chakra-ui/react'
import * as React from 'react'
import './app.css'
import { Box } from '@chakra-ui/react'

const App: React.FC = () => {
  return (
    <ChakraProvider>
      <Box as='button' height='250px' width='250px' bg='teal' m='8px' rounded='lg' boxShadow='sx'>Prêt</Box>
      <Box as='button' height='250px' width='250px' bg='teal'>Retour</Box>
    </ChakraProvider>
  )
}
export default App
