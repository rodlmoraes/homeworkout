import api from './api'

export const signIn = async (email: string, password: string) => {
  try {
    const response = await api.post('/teacher_auth/sign_in', { email, password })
    const { headers, headers: { uid, client }, data } = response
    const accessToken = headers['access-token']

    api.defaults.headers.common = {
      ...api.defaults.headers.common,
      'access-token': accessToken,
      uid,
      client,
    }

    localStorage.setItem('@homeworkout/teacher', JSON.stringify(data))
    localStorage.setItem('@homeworkout/access-token', accessToken)
    localStorage.setItem('@homeworkout/uid', uid)
    localStorage.setItem('@homeworkout/client', client)

    alert('Você está dentro!')
    return data
  } catch {
    alert('Erro ao tentar entrar!')
    return null
  }
}

export const loadAuth = () => {
  const storedTeacher = localStorage.getItem('@homeworkout/teacher')
  const accessToken = localStorage.getItem('@homeworkout/access-token')
  const uid = localStorage.getItem('@homeworkout/uid')
  const client = localStorage.getItem('@homeworkout/client')

  if (!storedTeacher || !accessToken || !uid || !client) return null

  api.defaults.headers.common = {
    ...api.defaults.headers.common,
    'access-token': accessToken,
    uid,
    client,
  }

  return JSON.parse(storedTeacher)
}
