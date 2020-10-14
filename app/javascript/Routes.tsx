import React from 'react'
import { BrowserRouter, Redirect, Route, RouteProps, Switch } from 'react-router-dom'

import { useAuth } from './contexts/auth'
import LessonList from './pages/LessonList'
import LessonForm from './pages/LessonForm'
import Login from './pages/Login'
import SignUp from './pages/SignUp'

type RoutesProps = {
  route?: string
}

// fallback route entered by the user, it can be useful in the future
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function Routes({ route }: RoutesProps) {
  const { signedIn } = useAuth()

  const redirectPath = signedIn ? '/cadastrar-aula' : '/'

  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={LessonList} exact />
        <PrivateRoute
          path='/cadastrar-aula'
          component={LessonForm}
          showCondition={signedIn}
          redirectPath='/'
        />
        <PrivateRoute
          path='/entrar'
          component={Login}
          showCondition={!signedIn}
          redirectPath='/cadastrar-aula'
        />
        <PrivateRoute
          path='/cadastrar'
          component={SignUp}
          showCondition={!signedIn}
          redirectPath='/cadastrar-aula'
        />
        <Redirect to={redirectPath} />
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
  <Route {...rest}
    render={
      props => showCondition ? <Component {...props} /> : <Redirect to={{ pathname: redirectPath }} />
    }
  />
)
