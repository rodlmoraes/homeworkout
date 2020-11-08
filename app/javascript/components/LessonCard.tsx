import React, { useState } from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Modal from '@material-ui/core/Modal'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import LogoImg from '../../assets/images/Logo.jpeg'

type LessonCardProps = {
  name: string
  description: string
  link: string
  image: string
}

export default function LessonCard({ name, description, link, image }: LessonCardProps) {
  const classes = useStyles()
  const [modalIsOpen, setModalIsOpen] = useState(false)
  return (
    <Card className={classes.card}>
      <CardHeader
        title={name}
      />
      <CardMedia
        className={classes.media}
        image={image || LogoImg }
        title={name}
      />
      <CardContent>
        <Typography variant='body2' component='p'>
          {description}
          <br/>
          {link}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button
          onClick={() => setModalIsOpen(true)}
          className={classes.button}
          variant='contained'
          color='primary'
        >Detalhes</Button>
      </CardActions>
      <Modal
        open={modalIsOpen}
        className={classes.modal}
        onBackdropClick={() => setModalIsOpen(false)}
        onEscapeKeyDown={() => setModalIsOpen(false)}
      >
        <Container className={classes.modalContainer} component={Paper}>
          <Typography variant='h6'> {name} </Typography>
          <Typography> Descrição: {description} </Typography>
          <Typography> Link direto para aula: {link} </Typography>
        </Container>
      </Modal>
    </Card>
  )
}

const useStyles = makeStyles(() =>
  createStyles({
    card: {
      maxWidth: '22rem',
      height: '25rem',
      borderRadius: 15,
    },
    media: {
      paddingTop: '56.25%',
    },
    button: {
      width: '250px',
      height: '50px',
      marginLeft: '3.2rem',
      marginRight: '3.2rem',
      fontWeight: 600,
      borderRadius: 15,
    },
    modal: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    },
  }),
)
