import * as React from 'react'
import { Box, Center, Text } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {useTranslation} from 'react-i18next'

const Success = () => {
  const navigate = useNavigate()
  const [countdown, setCountdown] = useState(3)
  const {t} = useTranslation()
  useEffect(() => {
    const timer = setTimeout(() => {
      if (countdown < 1) {
        navigate('/')
      }
      setCountdown(countdown - 1)
    }, 1000);
    return () => clearTimeout(timer);
  }, [countdown]);
  return (
    <Center width='100vw' height='100vh' display='flex' flexDir='column'>
      <Box as='text' rounded='md' p='3' bg='green.500' fontSize='6xl' color='blackAlpha.700'>
      {t('messages.borrow-success')}
      </Box>
      <Text fontSize='3xl' mt='4'>
      {t('messages.redirected')}{countdown}
      </Text>
    </Center>
  )
}
export default Success
