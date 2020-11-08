import { Button, Card, createStyles, makeStyles, Typography } from '@material-ui/core'
import React, { useState } from 'react'

import TextInput from '../components/TextInput'
import { useAuth } from '../contexts/auth'
import Header from '../components/Header'
import SecretInput from '../components/SecretInput'
import LargeButton from '../components/LargeButton'

export default function SignUp() {
  const { signUp } = useAuth()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const classes = useStyles()

  return (
    <>
      <Header/>
      <Card className={classes.cardSingUp}>
        <Typography variant='h3'>Cadastre-se e adicione novas aulas!</Typography>
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
          onClick={() => signUp(email, password)}
        >
            Cadastrar
        </LargeButton>
      </Card>
    </>
  )
}

const useStyles = makeStyles(() =>
  createStyles({
    cardSingUp: {
      display: 'flex',
      flexDirection: 'column',
      padding: '2rem',
      alignItems: 'center',
      borderRadius: 15,
      margin: '4rem',
    },
  }),
)
