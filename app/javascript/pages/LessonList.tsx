import React, { useEffect, useState } from 'react'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { Typography, Grid } from '@material-ui/core'

import Header from '../components/Header'
import TextInput from '../components/TextInput'
import LessonCard from '../components/LessonCard'
import api from '../services/api'

export type Lesson = {
  id: string
  name: string
  description: string
  link: string
  image: string
}

export default function LessonList() {
  const [lessons, setLessons] = useState<Lesson[]>([])
  const [query, setQuery] = useState('')
  const classes = useStyles()
  useEffect(() => { listLessons(query).then(setLessons) }, [query])
  return (
    <>
      <Header/>
      <div className={classes.lessonList}>
        <Typography variant='h3' color='textPrimary'>Aulas disponíveis</Typography>
        <TextInput name='Busca' label='Busca' onChange= {e => { setQuery(e.target.value) }}
          placeholder='Nome ou descrição da aula' value={query}
        />
        <Grid container spacing={3}>
          {lessons.map(({ id, name, description, link, image }, key) => (<Grid key={key} item xs={3}>
            <LessonCard id={id} name={name} description={description} link={link} image={image} />
          </Grid>))}
        </Grid>
      </div>
    </>
  )
}

const listLessons = async (query: string) => {
  const { data } = await api.get(`/lessons?query=${query}`)
  return data
}

const useStyles = makeStyles(() =>
  createStyles({
    lessonList: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      borderRadius: 15,
      padding: '2rem',
      margin: '4rem',
    },
    button: {
      marginTop: '0.8rem',
    },
  }),
)
