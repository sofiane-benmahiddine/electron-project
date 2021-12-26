import { Global } from '@emotion/react'
import * as React from 'react'

const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'Amiri';
        font-style: normal;
        font-weight: 700;
        src: url(../../assets/fonts/Amiri-Bold.woff2) format('woff2');
      }
      @font-face {
        font-family: 'Roboto-Reg';
        font-style: normal;
        font-weight: 400;
        src: url(../../assets/fonts/Roboto-Regular.woff2) format('woff2');
      }
   `}
  />
)

export default Fonts 
