import { extendTheme} from '@chakra-ui/react'
import * as React from 'react' 
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      bg: mode('#ebdece', '#202023')(props)
    }
  })
}
 const fonts = {
   heading: 'Amiri',
   body: 'Roboto-Reg'
 };
const components = {
  Heading: {
    variants: {
      'section-title': {
        marginTop: 5,
        fontSize: 40
      },
      'language-switch': {
        fontSize: 35
      },
      'message-card-scanner': {
        fontSize: 40
      },
      'message-book-scanner': {
        fontSize: 30,
        marginBottom: 10
      }
    }
  },
  Text: {
    variants: {
      'user-details': {
        fontSize: 20,
        fontWeight: 'bold'
      }
    }
  }
}
 const colors = {
   glassTeal: "#88ccca",
 };

 const config = {
//   initialColorMode: "dark",
//   useSystemColorMode: true,
 };
 const direction = 'ltr'

const theme = extendTheme({direction, styles, config, fonts, colors, components});

export default theme;
