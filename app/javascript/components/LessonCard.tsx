import React from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import LogoImg from '../../assets/images/Logo.jpeg'
import { useHistory } from 'react-router-dom'
import { Lesson } from '../pages/LessonList'

type LessonCardProps = Lesson

export default function LessonCard({ id, name, description, link, image }: LessonCardProps) {
  const classes = useStyles()
  const history = useHistory()

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
          onClick={() => history.push(`aula/${id}`)}
          className={classes.button}
          variant='contained'
          color='primary'
        >Detalhes</Button>
      </CardActions>
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
  }),
)
