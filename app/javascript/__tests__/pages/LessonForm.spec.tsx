import React from 'react'
import { render } from '@testing-library/react'

import LessonForm from '../../pages/LessonForm'

jest.mock('react-s3', () => ({
  uploadFile: () => Promise.resolve({ data: [] }),
}))

test('renders LessonForm', () => {
  const { getByText, getAllByText } = render(<LessonForm />)
  getByText('HomeWorkout')
  getByText('Cadastro de Aula')
  getAllByText('Nome da aula')
  getAllByText('Link da Aula')
  getAllByText('Descrição da Aula')
  getByText('Escolha sua Imagem')
  getByText('Salvar Cadastro')
})
