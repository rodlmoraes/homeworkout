import { Card, createStyles, makeStyles, Typography } from '@material-ui/core'
import React, { useState } from 'react'

import TextInput from '../components/TextInput'
import { useAuth } from '../contexts/auth'
import Header from '../components/Header'
import SecretInput from '../components/SecretInput'
import LargeButton from '../components/LargeButton'

export default function Login() {
  const { signIn } = useAuth()

  const classes = useStyles()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <>
      <Header/>
      <Card className={classes.cardLogin}>
        <Typography variant='h3'>Entre e adicione novas aulas!</Typography>
        <TextInput
          name='Email'
          label='Email'
          onChange= {e => { setEmail(e.target.value) }}
          placeholder='Digite aqui seu email'
          value={email}
        />
        <SecretInput
          onChange= {e => { setPassword(e.target.value) }}
          value={password}
        />
        <LargeButton
          color='secondary'
          onClick={() => signIn(email, password)}
        >
            Entrar
        </LargeButton>
      </Card>
    </>
  )
}

const useStyles = makeStyles(() =>
  createStyles({
    cardLogin: {
      alignItems: 'center',
      flexDirection: 'column',
      display: 'flex',
      borderRadius: 15,
      padding: '2rem',
      margin: '4rem',
    },
  }),
)
