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
import { Teacher } from '../contexts/auth'

export default function TeacherInfo() {
  const history = useHistory()
  const { showAlert } = useAlert()
  const [teacher, setTeacher] = useState<Teacher>({ id: 0, name: '', image: '', email: '', phone: '' })
  useEffect(() => { getCurrentTeacher().then(setTeacher) }, [])
  const classes = useStyles()

  const updateTeacher = async () => {
    try {
      await api.put('/current_teacher/0', { teacher })
      showAlert('Informações atualizadas!')
      history.push('/')
    } catch {
      alert('Erro ao tentar atualizar informações!')
    }
  }

  return (
    <>
      <Header/>
      <Card className={classes.cardInfo}>
        <Typography variant='h3'>Suas informações</Typography>
        <TextInput name='Nome' label='Nome'
          onChange={e => { setTeacher({ ...teacher, name: e.target.value }) }} placeholder='Seu nome'
          value={teacher.name} />
        <TextInput name='Phone' label='Phone'
          onChange={e => { setTeacher({ ...teacher, phone: e.target.value }) }} placeholder='Seu WhatsApp'
          value={teacher.phone} />
        <UploadButton image={teacher.image} setImage={image => setTeacher({ ...teacher, image })}
          buttonText='Escolha sua foto de perfil'/>
        <LargeButton color='primary' onClick={updateTeacher}>
          Salvar Cadastro
        </LargeButton>
      </Card>
    </>
  )
}

const getCurrentTeacher = async () => {
  const { data } = await api.get('/current_teacher/0')
  return data
}

const useStyles = makeStyles(() =>
  createStyles({
    cardInfo: {
      borderRadius: 15,
      padding: '2rem',
      margin: '4rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    button: {
      marginTop: '0.8rem',
    },
  }),
)
