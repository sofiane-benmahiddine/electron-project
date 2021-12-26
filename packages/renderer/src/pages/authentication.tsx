import * as React from 'react'
import { useState } from 'react'
import { Box, Image, Heading, Spinner } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import MainLayout from '../components/layout/mainLayout'
import { useNavigate, useLocation } from 'react-router-dom'

const Authentication = () => {
  const { t } = useTranslation()
  const [userId, setUserId] = useState('')
  const navigate = useNavigate()
  const location = useLocation()
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const response = await fetch('http://localhost:8080/api/auth', {
      method: 'POST',
      body: userId
    })
    const data = await response.json()
    console.log(data)
    navigate('/operation', {state: location.state})
  }
  return (
    <MainLayout>
      <Box display='flex' flexDir='column' justifyContent='center' alignItems='center'>
        <Heading variant='message-card-scanner'>
          {t('messages.read-card-message')}
        </Heading>
        <Image
          boxSize='400px'
          src='../assets/scanner.png'
          alt='scan card'
        />
        <Spinner
          thickness='7px'
          speed='0.65s'
          emptyColor='gray.100'
          color='gray'
          height='80px'
          width='80px'
        />
        <form onSubmit={handleSubmit}>
          <input
            type={'password'}
            value={userId}
            autoFocus={true}
            onBlur={({ target }) => target.focus()}
            onChange={(e) => setUserId(e.target.value)}
            style={{
              position: "absolute",
              color: "transparent",
              background: "transparent",
              border: "none",
              outline: "none"
            }} />
        </form>
      </Box>
    </MainLayout>
  )
}
export default Authentication
