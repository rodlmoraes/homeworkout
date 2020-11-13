import {
  Container,
  Paper,
  Table,
  TableRow,
  TableCell,
  makeStyles,
  TableHead,
  TableBody,
  Theme,
  Button,
} from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Lesson } from './LessonList'
import api from '../services/api'
import Header from '../components/Header'

export default function UserMaterialList() {
  const [lessons, setLessons] = useState<Lesson[]>([])
  const history = useHistory()

  useEffect(() => {
    api.get('current_teacher/lessons').then(response => { setLessons(response.data) })
  }, [])

  const { container, head, cell, cellData, icon, addButtonContainer, iconsCellData } = useStyles()

  return (
    <>
      <Header />
      <Container className={container} component={Paper}>
        <Table>
          <TableHead>
            <TableRow className={head}>
              <TableCell className={cell}>Nome</TableCell>
              <TableCell className={cell}>Descrição</TableCell>
              <TableCell className={cell}>Link</TableCell>
              <TableCell className={cell}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {lessons.map(({ name, description, link, id }) => (
              <TableRow key={id}>
                <TableCell className={cellData}>{name}</TableCell>
                <TableCell className={cellData}>{description}</TableCell>
                <TableCell className={cellData}>{link}</TableCell>
                <TableCell className={iconsCellData} >
                  <EditIcon className={icon} />
                  <DeleteIcon className={icon} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Container>
      <Container className={addButtonContainer}>
        <Button
          color='primary'
          variant='contained'
          size='large'
          onClick={() => history.push('/cadastrar-aula')}
        >
          Adicionar
        </Button>
      </Container>
    </>
  )
}

const useStyles = makeStyles((theme: Theme) => {
  const baseIcon = {
    height: '2.4rem',
    width: '2.4rem',
    color: theme.palette.common.white,
    cursor: 'pointer',
    '&:hover': {
      color: theme.palette.primary.light,
    },
  }

  return {
    container: {
      marginTop: '3.5rem',
      padding: 0,
      border: '1px solid',
      borderColor: theme.palette.primary.dark,
    },
    head: {
      backgroundColor: theme.palette.primary.main,
    },
    cell: {
      fontSize: '2rem',
    },
    cellData: {
      fontSize: '1.2rem',
    },
    iconsCellData: {
      fontSize: '1.2rem',
      textAlign: 'right',
    },
    icon: {
      ...baseIcon,
    },
    addButtonContainer: {
      textAlign: 'right',
      padding: '2rem',
    },
  }
})
