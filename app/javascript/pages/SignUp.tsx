import { Card, createStyles, makeStyles, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import api from '../services/api'

import TextInput from '../components/TextInput'
import { useAuth } from '../contexts/auth'
import Header from '../components/Header'
import SecretInput from '../components/SecretInput'
import LargeButton from '../components/LargeButton'

export default function SignUp() {
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const classes = useStyles()
  const { signUp } = useAuth()
  return (
    <>
      <Header/>
      <Card className={classes.cardSingUp}>
        <Typography variant='h3'>Cadastre-se e adicione novas aulas!</Typography>
        <TextInput
          name='Nome'
          label='Nome'
          onChange= {e => { setName(e.target.value) }}
          placeholder='Digite aqui seu nome'
          value={name}
        />
        <TextInput
          name='Email'
          label='Email'
          onChange= {e => { setEmail(e.target.value) }}
          placeholder='Digite aqui seu email'
          value={email}
        />
        <SecretInput onChange= {e => { setPassword(e.target.value) }} value={password} />
        <LargeButton color='secondary' onClick={() => {
          signUp(email, password).then(() => putName(name))
        }}>Cadastrar</LargeButton>
      </Card>
    </>
  )
}
const putName = async (name: string) => {
  try {
    await api.put('/current_teacher/0', { teacher: { name: name, email: null, image: null } },
    )
  } catch {
    alert('Erro ao tentar atualizar informações!')
  }
}

const useStyles = makeStyles(() =>
  createStyles({
    cardSingUp: {
      margin: '4rem',
      padding: '2rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      borderRadius: 15,
    },
  }),
)
