import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import CameraIcon from '@material-ui/icons/PhotoCamera'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%',
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}))

const cards = [{ title: 'Carolina', description: 'Desenvolvedora Topster', image: 'https://bit.ly/36gZ1DF' },
  { title: 'Rodrigo', description: 'Desenvolvedor Topster', image: 'https://bit.ly/3lgLUZy' },
  { title: 'Rogério', description: 'Desenvolvedor Topster', image: 'https://bit.ly/3lgLVwA' },
  { title: 'Vinícius', description: 'Desenvolvedor Topster', image: '..' },
  { title: 'Julia', description: 'Desenvolvedora Topster', image: 'https://bit.ly/3pbQ47i' },
  { title: 'João', description: 'Desenvolvedor Topster', image: '..' }]

export default function AboutUs() {
  const classes = useStyles()

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position='relative'>
        <Toolbar>
          <CameraIcon className={classes.icon} />
          <Typography variant='h6' color='inherit' noWrap>
            Sobre Nós
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth='sm'>
            <Typography component='h1' variant='h2' align='center' color='textPrimary' gutterBottom>
              Sobre Nós
            </Typography>
            <Typography variant='h5' align='center' color='textSecondary' paragraph>
              A Empresa Homeworkout surgiu em meados de 2020 durante o período de
              isolamento devido a pandemia do COVID-19
              com o intuito de fornecer aulas de exercícios físicos a pessoas impossibilitadas
              de sairem de suas casas.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify='center'>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth='md'>
          <Grid container spacing={ 4 }>
            { cards.map(({ title, image, description }, key) => (
              <Grid key={ key }>
                <Card className={ classes.card }>
                  <CardMedia
                    className={ classes.cardMedia }
                    image={ image }
                  />
                  <CardContent className={ classes.cardContent }>
                    <Typography gutterBottom variant='h5' component='h2'>
                      { title }
                    </Typography>
                    <Typography>
                      { description }
                    </Typography>
                  </CardContent>
                  <CardActions>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  )
}
