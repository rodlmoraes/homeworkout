import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { Typography, Card } from '@material-ui/core'
import Header from '../components/Header'
import TextInput from '../components/TextInput'
import api from '../services/api'
import { useAlert } from '../contexts/alert'
import LargeButton from '../components/LargeButton'
import UploadButton from '../components/UploadButton'

export default function LessonForm() {
  const history = useHistory()
  const { showAlert } = useAlert()

  const [name, setName] = useState('')
  const [link, setLink] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState('')

  const handleCreateClass = async () => {
    try {
      await api.post('/lessons', {
        lesson: {
          name,
          link,
          description,
          image,
        },
      })
      showAlert('Aula cadastrada!')
      history.push('/')
    } catch {
      alert('Erro ao tentar cadastrar aula!')
    }
  }

  const classes = useStyles()

  return (
    <>
      <Header/>
      <Card className={classes.card}>
        <Typography variant='h3'>Cadastro de Aula</Typography>
        <TextInput
          name='Nome da aula'
          label='Nome da aula'
          onChange= {e => { setName(e.target.value) }}
          placeholder='Aula de'
          value={name}
        />
        <TextInput
          name='Link da Aula'
          label='Link da Aula'
          onChange= {e => { setLink(e.target.value) }}
          placeholder='Link do Youtube'
          value={link}
        />
        <TextInput
          name='Descrição da Aula'
          label='Descrição da Aula'
          multiline
          onChange= {e => { setDescription(e.target.value) }}
          placeholder='Descrição'
          value={description}
        />
        <UploadButton
          image={image}
          setImage={setImage}
          buttonText='Escolha a foto da sua aula'
        />
        <LargeButton
          color='primary'
          onClick={handleCreateClass}
        >
          Salvar Cadastro
        </LargeButton>
      </Card>
    </>
  )
}

const useStyles = makeStyles(() =>
  createStyles({
    button: {
      marginTop: '0.8rem',
    },
    card: {
      display: 'flex',
      margin: '4rem',
      flexDirection: 'column',
      alignItems: 'center',
      borderRadius: 15,
      padding: '2rem',
    },
  }),
)
