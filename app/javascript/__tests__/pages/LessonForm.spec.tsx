import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import LessonForm from '../../pages/LessonForm'

jest.mock('react-s3', () => ({
  uploadFile: () => Promise.resolve({ data: [] }),
}))

test('renders LessonForm', async () => {
  const { getByText, getAllByText, getByPlaceholderText } = render(<LessonForm />)
  getByText('HomeWorkout')
  getByText('Cadastro de Aula')
  getAllByText('Nome da aula')
  getAllByText('Link da Aula')
  getAllByText('Descrição da Aula')
  getByText('Escolha a foto da sua aula')
  getByText('Salvar Cadastro')
  await fireEvent.change(
    getByPlaceholderText('Link do Youtube'),
    {
      target: {
        value: 'www.youtube.com/watch?v=asdf',
      },
    },
  )
  expect(getByPlaceholderText('Link do Youtube')).toHaveProperty(
    'value',
    'https://www.youtube.com/embed/asdf',
  )
})
