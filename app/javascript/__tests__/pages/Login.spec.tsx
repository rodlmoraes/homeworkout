import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import Login from '../../pages/Login'

test('renders LessonForm', async () => {
  const { getByText, getAllByText, getByPlaceholderText } = render(<Login/>)
  getByText('HomeWorkout')
  getByText('Entre e adicione novas aulas!')
  getAllByText('Email')
  getAllByText('Senha')
  await fireEvent.change(
    getByPlaceholderText('Digite aqui seu email'),
    {
      target: {
        value: 'juliagmail.com',
      },
    },
  )
  getByText('Email ou senha inválidos!')
})
