import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { Typography, Card } from '@material-ui/core'
import Header from '../components/Header'
import TextInput from '../components/TextInput'
import api from '../services/api'
import { useAlert } from '../contexts/alert'
import LargeButton from '../components/LargeButton'
import UploadButton from '../components/UploadButton'
import { Lesson } from './LessonList'

type Props = {
  match: {
    params: {
      id: string
    }
  }
}

export default function UpdateLessonForm({ match }: Props) {
  const history = useHistory()
  const { showAlert } = useAlert()

  const { id } = match.params

  const [lesson, setLesson] = useState<Lesson>({
    id,
    name: '',
    description: '',
    image: '',
    link: '',
    teacher:
      {
        email: '',
        id: 0,
        name: '',
        image: '',
        phone: '',
      },
  })

  useEffect(() => {
    getLesson(id).then(setLesson)
  }, [id])

  const updateLesson = async () => {
    try {
      await api.put(`/lessons/${id}`, { lesson })
      showAlert('Aula atualizada!')
      history.push('/')
    } catch {
      alert('Erro ao tentar atualizar aula!')
    }
  }

  const classes = useStyles()

  return (
    <>
      <Header/>
      <Card className={classes.card}>
        <Typography variant='h3'>Atualização de Aula</Typography>
        <TextInput
          name='Nome da aula'
          label='Nome da aula'
          onChange= {e => { setLesson({ ...lesson, name: e.target.value }) }}
          placeholder='Aula de'
          value={lesson.name}
        />
        <TextInput
          name='Link da Aula'
          label='Link da Aula'
          onChange= {e => { setLesson({ ...lesson, link: e.target.value }) }}
          placeholder='Link do Youtube'
          value={lesson.link}
        />
        <TextInput
          name='Descrição da Aula'
          label='Descrição da Aula'
          multiline
          onChange= {e => { setLesson({ ...lesson, description: e.target.value }) }}
          placeholder='Descrição'
          value={lesson.description}
        />
        <UploadButton
          image={lesson.image}
          setImage={image => { setLesson({ ...lesson, image }) }}
          buttonText='Escolha a foto da sua aula'
        />
        <LargeButton
          color='primary'
          onClick={updateLesson}
        >
          Salvar Atualização
        </LargeButton>
      </Card>
    </>
  )
}

const getLesson = async (id: string) => {
  const { data } = await api.get(`/lessons/${id}`)
  return data
}

const useStyles = makeStyles(() =>
  createStyles({
    card: {
      flexDirection: 'column',
      display: 'flex',
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
