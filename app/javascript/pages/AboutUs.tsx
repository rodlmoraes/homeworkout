import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';



const useStyles = makeStyles((theme) => ({
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
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [{title: "Carolina Galvão", description: "Desenvolvedora Topster", image: "https://scontent.fvcp2-1.fna.fbcdn.net/v/t1.0-9/115819669_3136476109777194_6809263204778763996_o.jpg?_nc_cat=109&ccb=2&_nc_sid=84a396&_nc_eui2=AeH_mXGoGTdO7vYgsMyWfyouBqR7kYBxm2EGpHuRgHGbYXxBDQAS8AH_iPnl_mq2jy73sXk7k3KY_W4slJWXJVrX&_nc_ohc=5pFLSO-v9JEAX97aBzV&_nc_ht=scontent.fvcp2-1.fna&oh=780cb845a572b6e72de5e0dba6df203a&oe=5FCE196F" },
{title: "Rodrigo Lima", description: "Desenvolvedor Topster", image: "https://scontent.fvcp2-1.fna.fbcdn.net/v/t1.0-9/48415566_2055301407891359_560129066145939456_o.jpg?_nc_cat=102&ccb=2&_nc_sid=174925&_nc_eui2=AeHXfeomnsjFflfMIzvLAqihEqA5IqOtFFsSoDkio60UWxmxMZclgzXcBxhrhGOxCxOoqlZS0lUmQeDLZfM8Z-CV&_nc_ohc=n_HaoLVDLkcAX_lRgn_&_nc_ht=scontent.fvcp2-1.fna&oh=ad1bb34b3ad7bec253e28dae79b3b494&oe=5FCBB9EC" },
{title: "Rogério Ferreira", description: "Desenvolvedor Topster", image: "https://scontent.fvcp2-1.fna.fbcdn.net/v/t1.0-9/s851x315/50583666_962663867455102_3536462447890137088_o.jpg?_nc_cat=106&ccb=2&_nc_sid=da31f3&_nc_eui2=AeEbO0KsHv3jXpNUjZZpACkDicrS3YYg8w-JytLdhiDzD_l3CTEwLYu6u2CVWE6Po6Ji4q2YY4G0oveYDVmaEWKN&_nc_ohc=gHfPNYFKV8MAX-x45ju&_nc_ht=scontent.fvcp2-1.fna&tp=7&oh=cda4ca4d5c16f89b54bf6be46b545b80&oe=5FCE8505" },
{title: "Vinícius", description: "Desenvolvedor Topster", image: "data:image/png;base64,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" },
{title: "Julia Passos", description: "Desenvolvedora Topster", image: "https://scontent.fvcp2-1.fna.fbcdn.net/v/t1.0-9/71709733_2942168089144052_4294027870688247808_n.jpg?_nc_cat=107&ccb=2&_nc_sid=174925&_nc_eui2=AeG5Wm2g2Q9UII_yZqJZQMHvw3-TBKuZbtXDf5MEq5lu1RSlfMEqmvWFPfV_QJWg1372JmwPU8rAQYHbmOQLB2Mv&_nc_ohc=ccVH5EOQTjYAX-CXFkw&_nc_oc=AQlJ3K-epKCs6W5viL40DkNMoi4mNikaZg90AfAjpfYqyDyaDfCvHy2yIlVauxFopFtgZRE-y8DEyT8ho6nxhIkg&_nc_ht=scontent.fvcp2-1.fna&oh=fd95d85dd56307ad6d8b928a69dabdc2&oe=5FCDF4D1" },
{title: "João Fukuda", description: "Desenvolvedor Topster", image: "data:image/png;base64,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" }];

export default function AboutUs() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <CameraIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            Sobre Nós
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Sobre Nós
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              A Homeworkout surgiu em meados de 2020 durante o período de isolamento devido a pandemia do COVID-19
              com o intuito de fornecer aulas de exercícios físicos a pessoas impossibilitadas
              de sairem de suas casas.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map(({title,image, description}) => (
              <Grid item  xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={image}
                   
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {title}
                    </Typography>
                    <Typography>
                      {description}
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
      {/* End footer */}
    </React.Fragment>
  );
}
