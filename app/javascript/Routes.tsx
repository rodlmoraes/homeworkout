import React from 'react'
import { BrowserRouter, Redirect, Route, RouteProps, Switch } from 'react-router-dom'

import { useAuth } from './contexts/auth'
import LessonList from './pages/LessonList'
import LessonForm from './pages/LessonForm'
import LessonPage from './pages/LessonPage'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import TeacherInfo from './pages/TeacherInfo'
import AboutUs from './pages/AboutUs'
import TeacherLessons from './pages/TeacherLessons'
import UpdateLessonForm from './pages/UpdateLessonForm'

type RoutesProps = {
  route?: string
}

// fallback route entered by the user, it can be useful in the future
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function Routes({ route }: RoutesProps) {
  const { signedIn } = useAuth()

  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={LessonList} exact />
        <Route path='/sobre-nos' component={AboutUs} exact />
        <Route path='/aula/:id' component={LessonPage} exact />
        <PrivateRoute path='/cadastrar-aula'
          component={LessonForm}
          showCondition={signedIn}
          redirectPath='/'
        />
        <PrivateRoute path='/atualizar-aula/:id'
          component={UpdateLessonForm}
          showCondition={signedIn}
          redirectPath='/'
        />
        <PrivateRoute path='/entrar'
          component={Login}
          showCondition={!signedIn}
          redirectPath='/cadastrar-aula'
        />
        <PrivateRoute path='/cadastrar'
          component={SignUp}
          showCondition={!signedIn}
          redirectPath='/cadastrar-aula'
        />
        <PrivateRoute path='/informacoes-do-professor'
          component={TeacherInfo}
          showCondition={signedIn}
          redirectPath='/entrar'
        />
        <PrivateRoute path='/suas-aulas'
          component={TeacherLessons}
          showCondition={signedIn}
          redirectPath='/entrar'
        />
        <Redirect to='/' />
      </Switch>
    </BrowserRouter>
  )
}

const PrivateRoute = ({
  showCondition,
  redirectPath,
  component: Component,
  ...rest
}: { showCondition: boolean, redirectPath: string } & RouteProps,
) => (
  <Route exact {...rest}
    render={
      props => showCondition ? <Component {...props} /> : <Redirect to={{ pathname: redirectPath }} />
    }
  />
)
