import React from 'react'
import { useHistory } from 'react-router-dom'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import AccountCircle from '@material-ui/icons/AccountCircle'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import { useAuth } from '../contexts/auth'

const useStyles = makeStyles(() =>
  createStyles({
    toolbar: {
      display: 'flex',
      justifyContent: 'space-between',
    },
  }),
)

export default function Header() {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const history = useHistory()
  const { signedIn, signOut } = useAuth()

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const toLogin = () => {
    history.push('/entrar')
  }

  const toSignUp = () => {
    history.push('/cadastrar')
  }

  const toCreateLesson = () => {
    history.push('/cadastrar-aula')
  }

  const toLessonList = () => {
    history.push('/')
  }

  const toTeacherInfo = () => {
    history.push('/informacoes-do-professor')
  }

  const toAboutUs = () => {
    history.push('/sobre-nos')
  }

  return (
    <AppBar position='static'>
      <Toolbar className={classes.toolbar}>
        <IconButton
          data-testid='menu-button'
          onClick={handleClick}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          PaperProps={{
            style: {
              width: '12rem',
            },
          }}
          getContentAnchorEl={null}
        >
          <MenuItem onClick={toLessonList}>Lista de aulas</MenuItem>
          { signedIn
            ? (<>
              <MenuItem onClick={toCreateLesson}>Cadastrar aula</MenuItem>
              <MenuItem onClick={toTeacherInfo}>Suas informações</MenuItem>
              <MenuItem onClick={signOut}>Sair</MenuItem>
            </>)
            : (<>
              <MenuItem onClick={toLogin}>Entrar</MenuItem>
              <MenuItem onClick={toSignUp}>Cadastrar</MenuItem>
            </>) }
          <MenuItem onClick={toAboutUs}>Sobre nós</MenuItem>
        </Menu>
        <Typography variant='h6'>
            HomeWorkout
        </Typography>
        <IconButton data-testid='login-button' color='inherit' onClick={toLogin} >
          <AccountCircle />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}
