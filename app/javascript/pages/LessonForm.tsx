import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import { Typography, Card } from '@material-ui/core'

import Header from '../components/Header'
import TextInput from '../components/TextInput'
import api from '../services/api'

export default function LessonForm() {
  const history = useHistory()

  const [name, setName] = useState('')
  const [link, setLink] = useState('')
  const [description, setDescription] = useState('')

  const handleCreateClass = async () => {
    try {
      await api.post('/lessons', {
        lesson: {
          name,
          link,
          description,
        },
      })
      alert('Cadastro realizado com sucesso!')
      history.push('/')
    } catch {
      alert('Erro no cadastro!')
    }
  }

  const classes = useStyles()

  return (
    <>
      <Header/>
      <Card className={classes.root}>
        <Typography variant='h3'>Cadastro de Aula</Typography>
        <TextInput
          label='Nome da aula'
          onChange= {e => { setName(e.target.value) }}
          placeholder='Aula de'
          value={name}
        />
        <TextInput
          label='Link da Aula'
          onChange= {e => { setLink(e.target.value) }}
          placeholder='Link do Youtube'
          value={link}
        />
        <TextInput
          label='Descrição da Aula'
          multiline
          onChange= {e => { setDescription(e.target.value) }}
          placeholder='Descrição'
          value={description}
        />
        <Button
          className={classes.button}
          color='secondary'
          onClick={handleCreateClass}
          size='large'
          variant='contained'
        >
          Salvar Cadastro
        </Button>
      </Card>
    </>
  )
}

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      padding: '2rem',
      alignItems: 'center',
      borderRadius: 15,
      margin: '4rem',
    },
    button: {
      marginTop: '0.8rem',
    },
  }),
)
