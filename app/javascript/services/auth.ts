import api from './api'

export const signUp = async (email: string, password: string, showAlert: (alertText: string) => void) => {
  try {
    const response = await api.post('/teacher_auth', {
      email, password, password_confirmation: password,
    })
    const { headers, headers: { uid, client }, data } = response
    const accessToken = headers['access-token']

    api.defaults.headers.common = {
      ...api.defaults.headers.common,
      'access-token': accessToken,
      uid,
      client,
    }

    localStorage.setItem('@homeworkout/teacher', JSON.stringify(data.data))
    localStorage.setItem('@homeworkout/access-token', accessToken)
    localStorage.setItem('@homeworkout/uid', uid)
    localStorage.setItem('@homeworkout/client', client)

    showAlert('Você se cadastrou!')
    return data.data
  } catch {
    alert('Erro ao tentar se cadastrar!')
    return null
  }
}

export const signIn = async (email: string, password: string, showAlert: (alertText: string) => void) => {
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

    localStorage.setItem('@homeworkout/teacher', JSON.stringify(data.data))
    localStorage.setItem('@homeworkout/access-token', accessToken)
    localStorage.setItem('@homeworkout/uid', uid)
    localStorage.setItem('@homeworkout/client', client)

    showAlert('Você entrou!')
    return data.data
  } catch {
    alert('Erro ao tentar entrar!')
    return null
  }
}

export const signOut = async (showAlert: (alertText: string) => void) => {
  try {
    await api.delete('/teacher_auth/sign_out')

    api.defaults.headers.common = {
      ...api.defaults.headers.common,
      'access-token': null,
      uid: null,
      client: null,
    }

    localStorage.clear()

    showAlert('Você saiu :c')
    return true
  } catch {
    alert('Erro ao tentar sair!')
    return false
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
