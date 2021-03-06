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
import { Teacher, useAuth } from '../contexts/auth'

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

export default function Header() {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const history = useHistory()

  const { signedIn, signOut, teacher } = useAuth()

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

  const toTeacherLessons = () => {
    history.push('/suas-aulas')
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
            ? ([
              <MenuItem key='1' onClick={toCreateLesson}>Cadastrar aula</MenuItem>,
              <MenuItem key='2' onClick={toTeacherLessons}>Suas aulas</MenuItem>,
              <MenuItem key='3' onClick={toTeacherInfo}>Suas informações</MenuItem>,
              <MenuItem key='4' onClick={signOut}>Sair</MenuItem>,
            ])
            : ([
              <MenuItem key='1' onClick={toLogin}>Entrar</MenuItem>,
              <MenuItem key='2' onClick={toSignUp}>Cadastrar</MenuItem>,
            ]) }
          <MenuItem onClick={toAboutUs}>Sobre nós</MenuItem>
        </Menu>
        <Typography variant='h6' style={{ cursor: 'pointer' }} onClick={toLessonList}>
          HomeWorkout
        </Typography>
        <div className={classes.leftItem}>
          <Typography variant='subtitle1'>
            {teacher?.name}
          </Typography>
          <HeaderIconButton teacher={teacher} onClick={toLogin} />
        </div>
      </Toolbar>
    </AppBar>
  )
}

const HeaderIconButton = ({ teacher, onClick }: {teacher: Teacher, onClick: () => void}) => (
  <IconButton data-testid='login-button' color='inherit' onClick={onClick} >
    {
      teacher && (teacher.name || teacher.image)
        ? teacher.image
          ? teacher.image
          : <img src={avatarImageSrc(teacher)} />
        : <AccountCircle />
    }
  </IconButton>
)
const avatarImageSrc = (teacher: Teacher) => `https://ui-avatars.com/api/
?name=${teacher?.name?.replace(/ /g, '+')}
&length=${Math.min(2, teacher?.name?.split(' ')?.length)}
&${avatarSettings}`
const avatarSettings = 'rounded=true&size=32&bold=true&color=131419&background=e4e4e4'
