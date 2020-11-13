import React, { useEffect, useState } from 'react'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

import Header from '../components/Header'
import api from '../services/api'
import { Lesson } from './LessonList'

type Props = {
  match: {
    params: {
      id: number
    }
  }
}

export default function LessonPage({ match }:Props) {
  const [lesson, setLesson] = useState<Lesson | null>(null)
  const classes = useStyles()

  useEffect(() => {
    listLessons(match).then(setLesson)
  }, [match])

  return (
    <div>
      <Header/>
      <div className={classes.root}>
        <Typography variant='h3' color='textPrimary'>
          {lesson ? lesson.name : 'Aula não encontrada'}
        </Typography>
        { lesson &&
          <iframe width='560' height='315' src={lesson.link} frameBorder='0' allowFullScreen></iframe>
        }
        <Typography variant='body1' color='textPrimary'>{lesson?.description}</Typography>
      </div>
    </div>
  )
}

const listLessons = async match => {
  const { data } = await api.get(`/lessons/${match.params.id}`)
  return data
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
