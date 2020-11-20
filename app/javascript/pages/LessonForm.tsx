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
  const classes = useStyles()
  return (
    <>
      <Header/>
      <Card className={classes.card}>
        <Typography variant='h3'>Cadastro de Aula</Typography>
        <NameInput name={name} setName={setName} />
        <LinkInput link={link} setLink={setLink} />
        <DescriptionInput description={description} setDescription={setDescription} />
        <UploadButton image={image} setImage={setImage} buttonText='Escolha a foto da sua aula' />
        <LargeButton color='primary' onClick={() => handleCreateClass({
          lesson: { name, link, description, image }, showAlert, history,
        })}>Salvar Cadastro</LargeButton>
      </Card>
    </>
  )
}

const NameInput = (
  { name, setName }: { name: string, setName: (name: string) => void },
) => (<TextInput name='Nome da aula'
  label='Nome da aula'
  onChange= {e => { setName(e.target.value) }}
  placeholder='Aula de'
  value={name}
/>)

const LinkInput = (
  { link, setLink }: { link: string, setLink: (link: string) => void },
) => (<TextInput name='Link da Aula'
  label='Link da Aula'
  onChange= {e => { setLink(e.target.value) }}
  placeholder='Link do Youtube'
  value={link}
/>)

const DescriptionInput = (
  { description, setDescription }: { description: string, setDescription: (description: string) => void },
) => (<TextInput name='Descrição da Aula'
  label='Descrição da Aula'
  multiline
  onChange= {e => { setDescription(e.target.value) }}
  placeholder='Descrição'
  value={description}
/>)

const handleCreateClass = async ({ lesson, showAlert, history }) => {
  try {
    await api.post('/lessons', {
      lesson,
    })
    showAlert('Aula cadastrada!')
    history.push('/')
  } catch {
    alert('Erro ao tentar cadastrar aula!')
  }
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
