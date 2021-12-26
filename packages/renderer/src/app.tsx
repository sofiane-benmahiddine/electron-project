import { ChakraProvider } from '@chakra-ui/react'
import * as React from 'react'
import './app.css'
import theme from './libs/theme'
import Fonts from './libs/fonts'
import HomePage from './pages/home'
import Operation from './pages/operation'
import Authentication from './pages/authentication'
import Success from './pages/success'
import {
  HashRouter,
  Routes,
  Route
} from "react-router-dom";

const App: React.FC = () => {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <HashRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/auth' element={<Authentication />} />
          <Route path='/operation' element={<Operation />} />
          <Route path='/success' element={<Success />} />
        </Routes>
      </HashRouter>
    </ChakraProvider>
  )
}
export default App
