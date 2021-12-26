import * as React from 'react'
import { Box, Center, Heading, Image } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function HomePage() {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const handleSwitchLanguage = (language: string) => {
    if(language === 'ar') {
      i18n.changeLanguage('ar')
      console.log('switching direction rtl')
      document.documentElement.dir = 'rtl'
    }
    if(language === 'fr'){
      i18n.changeLanguage('fr')
      console.log('switching direction ltr')
      document.documentElement.dir = 'ltr'
      }
  }
  return (
    <>
      <Box position='absolute' display='flex' flexDirection='column' alignItems='end' justifyContent='end' mt='20'>
        <Box as='button' onClick={() => handleSwitchLanguage('fr')} my='5' height='90px' width='200px' bg='blue.600'>
          <Heading variant='language-switch'>
            Français
          </Heading>
        </Box>
        <Box as='button' onClick={() => handleSwitchLanguage('ar')} my='5' height='90px' width='200px' bg='green.700'>
          <Heading variant='language-switch'>
            العربية
          </Heading>
        </Box>
      </Box>
      <Center sx={{ minH: '100vh', minW: '100vw' }}>
        <Box display='flex' justifyContent='center' alignItems='center' flexDirection='column' onClick={() => navigate('/auth', { state: 'borrow' })} as='button' height='270px' width='270px' bg='teal' m='50px' rounded='lg' boxShadow='dark-lg'>
          <Image
            boxSize='140px'
            src='../assets/borrow-book.svg'
            alt='borrow'
          />
          <Heading variant='section-title'>
            {t('actions.borrow')}
          </Heading>
        </Box>
        <Box display='flex' justifyContent='center' alignItems='center' flexDirection='column' onClick={() => navigate('/auth', { state: 'return' })} as='button' height='270px' width='270px' bg='teal' m='50px' rounded='lg' boxShadow='dark-lg'>
          <Image
            boxSize='140px'
            src='../assets/return-book.svg'
            alt='return'
          />
          <Heading variant='section-title'>
            {t('actions.return')}
          </Heading>
        </Box>
      </Center>
    </>
  )
}
