import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import SignUp from '../../pages/SignUp'

test('renders SignUp', async () => {
  const { getByText, getAllByText, getByPlaceholderText } = render(<SignUp/>)
  getByText('HomeWorkout')
  getByText('Cadastre-se e adicione novas aulas!')
  getAllByText('Nome')
  getAllByText('Email')
  getAllByText('Senha')
  getByText('Cadastrar')
  await fireEvent.change(
    getByPlaceholderText('Digite aqui seu email'),
    {
      target: {
        value: 'juliagmail.com',
      },
    },
  )
  expect(getAllByText('Email ou senha inválidos!'))
  await fireEvent.change(
    getByPlaceholderText('Digite aqui sua senha'),
    {
      target: {
        value: '123',
      },
    },
  )
  getByText('Email ou senha inválidos!')
  await fireEvent.change(
    getByPlaceholderText('Digite aqui seu email'),
    {
      target: {
        value: 'julia@gmail.com',
      },
    },
  )
  expect(getAllByText('Email ou senha inválidos!'))
  await fireEvent.change(
    getByPlaceholderText('Digite aqui seu email'),
    {
      target: {
        value: 'juliagmail.com',
      },
    },
  )
  await fireEvent.change(
    getByPlaceholderText('Digite aqui sua senha'),
    {
      target: {
        value: '1234567',
      },
    },
  )
  expect(getAllByText('Email ou senha inválidos!'))
})
