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

export default function Header() {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const history = useHistory()

  const { signedIn, signOut, teacher } = useAuth()

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  return (
    <AppBar position='static'>
      <Toolbar className={classes.toolbar}>
        <IconButton data-testid='menu-button' onClick={handleClick}><MenuIcon /></IconButton>
        <Menu open={open} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
          PaperProps={{ style: { width: '12rem' } }} getContentAnchorEl={null}>
          <MenuItem onClick={toLessonList}>Lista de aulas</MenuItem>
          { signedIn
            ? ([
              <MenuItem key='1' onClick={() => toCreateLesson(history)}>Cadastrar aula</MenuItem>,
              <MenuItem key='2' onClick={() => toTeacherLessons(history)}>Suas aulas</MenuItem>,
              <MenuItem key='3' onClick={() => toTeacherInfo(history)}>Suas informações</MenuItem>,
              <MenuItem key='4' onClick={signOut}>Sair</MenuItem>,
            ])
            : ([
              <MenuItem key='1' onClick={() => toLogin(history)}>Entrar</MenuItem>,
              <MenuItem key='2' onClick={() => toSignUp(history)}>Cadastrar</MenuItem>,
            ]) }
          <MenuItem onClick={() => toAboutUs}>Sobre nós</MenuItem>
        </Menu>
        <Typography variant='h6' style={{ cursor: 'pointer' }} onClick={() => toLessonList(history)}>
          HomeWorkout
        </Typography>
        <div className={classes.leftItem}>
          <Typography variant='subtitle1'>
            {teacher?.name}
          </Typography>
          <IconButton data-testid='login-button' color='inherit' onClick={toLogin} >
            <AccountCircle />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  )
}

const handleClose = setAnchorEl => { setAnchorEl(null) }

const toLogin = history => { history.push('/entrar') }

const toSignUp = history => { history.push('/cadastrar') }

const toCreateLesson = history => { history.push('/cadastrar-aula') }

const toTeacherLessons = history => { history.push('/suas-aulas') }

const toLessonList = history => { history.push('/') }

const toTeacherInfo = history => { history.push('/informacoes-do-professor') }

const toAboutUs = history => { history.push('/sobre-nos') }

const useStyles = makeStyles(() =>
  createStyles({
    toolbar: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    leftItem: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
  }),
)
