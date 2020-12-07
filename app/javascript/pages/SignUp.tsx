import { Card, createStyles, makeStyles, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import api from '../services/api'

import TextInput from '../components/TextInput'
import { useAuth } from '../contexts/auth'
import Header from '../components/Header'
import SecretInput from '../components/SecretInput'
import LargeButton from '../components/LargeButton'

let isValid = false

export default function SignUp() {
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const classes = useStyles()
  const { signUp } = useAuth()
  function checkValidity() {
    isValid = /^[a-zA-Z0-9]{3,20}@[a-zA-Z0-9]{3,20}\.[a-zA-Z]{2,5}$/g.test(email) &&
    /^.{6,}$/g.test(password)
  }
  return (
    <>
      <Header/>
      <Card className={classes.cardSingUp}>
        <Typography variant='h3'>Cadastre-se e adicione novas aulas!</Typography>
        {!isValid &&
          <div>
            <p>Email ou senha inválidos!</p>
            <br/>
            <p>A senha deve conter no mínimo seis caracteres</p>
          </div>
        }
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
          onChange= {e => {
            setEmail(e.target.value)
            checkValidity()
          }}
          placeholder='Digite aqui seu email'
          value={email}
        />
        <SecretInput
          onChange= {e => {
            setPassword(e.target.value)
            checkValidity()
          }}
          value={password}
        />
        <LargeButton color='secondary' onClick={() => {
          if (isValid) signUp(email, password).then(() => putName(name))
        }}>Cadastrar</LargeButton>
      </Card>
    </>
  )
}
const putName = async (name: string) => {
  try {
    await api.put('/current_teacher/0', { teacher: { name: name, email: null, image: null, phone: null } })
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
