import * as React from 'react'
import { Flex, Avatar, Text, Badge, Heading, Box, Center } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import MainLayout from '../layout/mainLayout'
interface Props {
  children: React.ReactNode
}

const AuthLayout = (props: Props) => {
  const { t } = useTranslation()
  return (
    <MainLayout>
      <Flex position='absolute' top='10' right='0' bg='gray.300' width='400px' height='120' justifyContent='start' alignItems='center' shadow='lg'>
        <Avatar src='https://bit.ly/sage-adebayo' size='xl' mx='5' />
        <Box>
          <Text variant='user-details'>
            Abdelkrim Benmahiddine
          </Text>
          <Text fontSize='18'>Etudiant</Text>
        </Box>
      </Flex>
      {props.children}
    </MainLayout>
  )
}
export default AuthLayout
