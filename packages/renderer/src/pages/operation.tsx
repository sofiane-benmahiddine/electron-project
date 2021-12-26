import * as React from 'react'
import AuthLayout from '../components/layout/authLayout'
import { Image, Flex, Center, Heading, Text, Spinner, Box } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { useLocation, useNavigate } from 'react-router-dom'

export default function Borrow() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const location = useLocation()
  console.log(location)
  return (
    <AuthLayout>
      <Flex flexDir='column' alignItems='center'>
        <Heading variant='message-book-scanner'>
          {t('messages.read-book-message')}
        </Heading>
        <Image
          boxSize='150px'
          src='../assets/book-scanner.svg'
          alt='scan book'
          mb='7'
        />
        <Spinner
          thickness='4px'
          speed='0.65s'
          emptyColor='gray.100'
          color='gray'
          height='40px'
          width='40px'
          mb='10'
        />
        <Box position='absolute' bottom='20' as='button' onClick={() => navigate('/success')} my='5' height='90px' width='180px' bg='green.500'>
          <Heading variant='language-switch'>
          {t('actions.confirm')}
          </Heading>
        </Box>
        <Box
          p='2'
          m='2'
          color='white'
          bg='teal.500'
          rounded='md'
          shadow='md'
          width='700px'
        >
          <Center fontSize='2xl'>
            A Practical Guide TO Translation
          </Center>
        </Box>
        <Box
          p='2'
          m='2'
          color='white'
          bg='teal.500'
          rounded='md'
          shadow='md'
          width='700px'
        >
          <Center fontSize='2xl'>
            A Practical Guide TO Translation
          </Center>
        </Box>
        <Box
          p='2'
          m='2'
          color='white'
          bg='teal.500'
          rounded='md'
          shadow='md'
          width='700px'
        >
          <Center fontSize='2xl'>
            A Practical Guide TO Translation
          </Center>
        </Box>
        <Box
          p='2'
          m='2'
          color='white'
          bg='teal.500'
          rounded='md'
          shadow='md'
          width='700px'
        >
          <Center fontSize='2xl'>
            من الفلسفة اليونانية إلى الفلسفة الإسلامية ج1
          </Center>
        </Box>
        <Box
          p='2'
          m='2'
          color='white'
          bg='teal.500'
          rounded='md'
          shadow='md'
          width='700px'
        >
          <Center fontSize='2xl'>
            A Practical Guide TO Translation
          </Center>
        </Box>
      </Flex>
    </AuthLayout>
  )
}
