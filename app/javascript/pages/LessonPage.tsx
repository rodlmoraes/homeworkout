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

export default function LessonList({match}) {
  const [lesson, setLessons] = useState<Lesson>({name: `${match.params.id}`, description:  `Aula ${match.params.id} não encontrada.`, link: 'https://www.youtube.com/embed/dQw4w9WgXcQ'})
  const classes = useStyles()

  useEffect(() => {
    listLessons(match).then(setLessons)
  })

  return (
    <div>
      <Header/>
      <div className={classes.root}>
        <Typography variant='h3' color='textPrimary'>{lesson.name}</Typography>
        <iframe width='560' height='315' src={lesson.link} frameBorder='0' allowFullScreen></iframe>
        <Typography variant='body1' color='textPrimary'>{lesson.description}</Typography>
      </div>
    </div>
  )
}

const listLessons = async (match) => {
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
