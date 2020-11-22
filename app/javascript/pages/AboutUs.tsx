import React from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Header from '../components/Header'

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
    height: 300,
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  innerCardGrid: {
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 15,
    paddingRight: 15,
    height: 400,
    width: 300,
  }
}))

const cards = [{ title: 'Carolina Galvão', description: 'Desenvolvedora', image: 'https://bit.ly/36gZ1DF', link: 'https://www.linkedin.com/in/carolina-galv%C3%A3o/' },
  { title: 'Rodrigo Moraes', description: 'Desenvolvedor', image: 'https://bit.ly/3lgLUZy', link: 'https://www.linkedin.com/in/rodrigo-moraes-31738617b/' },
  { title: 'Rogério Ferreira', description: 'Desenvolvedor', image: 'https://bit.ly/3lgLVwA', link: 'https://www.linkedin.com/in/rogerio-ferreira-santos/' },
  { title: 'Vinícius Bueno', description: 'Desenvolvedor', image: 'https://bit.ly/372FuqS', link: 'https://www.linkedin.com/in/vinicius-bueno-de-carvalho-rodrigues-27442b151/' },
  { title: 'Júlia Passos', description: 'Desenvolvedora', image: 'https://bit.ly/3pbQ47i', link: 'https://www.linkedin.com/in/juliacbpassos/' },
  { title: 'João Fukuda', description: 'Desenvolvedor', image: 'https://bit.ly/3pRX6P3', link: 'https://www.linkedin.com/in/joaofukuda/' }]

export default function AboutUs() {
  const classes = useStyles()

  return (
    <React.Fragment>
      <Header />
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth='lg'>
            <Typography component='h1' variant='h2' align='center' color='textPrimary' gutterBottom>
              Sobre Nós
            </Typography>
            <Typography variant='h5' align='center' color='textSecondary' paragraph >
              A Empresa Homeworkout surgiu em 2020, durante o período de
              isolamento devido a pandemia do COVID-19,
              com o intuito de fornecer aulas de exercícios físicos a pessoas impossibilitadas
              de saírem de suas casas
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify='center'>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth='md'>
          <Grid container spacing={ 4 }>
            { cards.map(({ title, image, description, link }, key) => (
              <Grid key={ key } className={classes.innerCardGrid}>
                <Card className={ classes.card }>
                  <CardMedia
                    className={ classes.cardMedia }
                    image={ image }
                  />
                  <CardContent className={ classes.cardContent }>
                    <a href= { link } target='blank_' >
                      <Typography gutterBottom variant='h5' component='h2'>
                        { title }
                      </Typography>
                    </a>  
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
