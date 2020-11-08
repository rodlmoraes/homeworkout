import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import { Typography, Card } from '@material-ui/core'
import PublishIcon from '@material-ui/icons/Publish'
import Header from '../components/Header'
import TextInput from '../components/TextInput'
import api from '../services/api'
import { useAlert } from '../contexts/alert'
import SvgIcon from '@material-ui/core/SvgIcon/SvgIcon'
import { uploadFile } from 'react-s3'
import LargeButton from '../components/LargeButton'
import config from '../utils/awsConfig'

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

  const handleChange = event => {
    uploadFile(event.target.files[0], config)
      .then(({ location }) => setImage(location))
      .catch(err => console.error(err))
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
        <input type='file'
          id='fileUploadButton'
          style={{ display: 'none' }}
          onChange={handleChange}
        />
        <label htmlFor={'fileUploadButton'}>
          <Button
            className={classes.button}
            color='primary'
            variant='contained'
            component='span'
            startIcon={
              <SvgIcon fontSize='small'>
                <PublishIcon />
              </SvgIcon>
            }
          >
            Escolha sua Imagem
          </Button>
        </label>
        <img src={image}/>
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
    card: {
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
