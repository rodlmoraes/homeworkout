import React, { useEffect, useState } from 'react'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

import Header from '../components/Header'
import api from '../services/api'

type Lesson = {
  name: string
  description: string
  link: string
}

type Props = {
  match: {
    params: {
      id: number
    }
  }
}

export default function LessonPage({ match }:Props) {
  const [lesson, setLessons] = useState<Lesson>({ name: 'Carregando...', description: '', link: '' })
  const classes = useStyles()

  useEffect(() => {
    listLessons(match).then(setLessons)
  }, [match.params.id])

  return (
    <div>
      <Header/>
      <div className={classes.root}>
        <Typography variant='h3' color='textPrimary'>{lesson ? lesson.name : 'Aula não encontrada'}</Typography>
        <iframe width='560' height='315' src={lesson?.link} frameBorder='0' allowFullScreen></iframe>
        <Typography variant='body1' color='textPrimary'>{lesson?.description}</Typography>
      </div>
    </div>
  )
}

const listLessons = async match => {
  const { data } = await api.get(`/lessons?query=${match.params.id}`)
  return data[0]
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
