import * as React from 'react'
import { Box, Center, Heading } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
interface Props {
  children: React.ReactNode
}
export default function mainLayout(props: Props) {
  const navigate = useNavigate()
  const { t } = useTranslation()
  return (
    <>
      <Box position='absolute' bottom='20' as='button' onClick={() => navigate('/')} my='5' height='90px' width='180px' bg='red.300'>
        <Heading variant='language-switch'>
        {t('actions.cancel')}
        </Heading>
      </Box>
      <Center sx={{ minH: '100vh', minW: '100vw' }}>
        {props.children}
      </Center>
    </>
  )
}
