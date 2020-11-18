import React from 'react'
import { render } from '@testing-library/react'

import UpdateLessonForm from '../../pages/UpdateLessonForm'

jest.mock('react-s3', () => ({
  uploadFile: () => Promise.resolve({ data: [] }),
}))

jest.mock('../../services/api', () => ({
  get: () => Promise.resolve({ data: null }),
}))

test('renders UpdateLessonForm', () => {
  const { getByText, getAllByText } = render(<UpdateLessonForm match={{ params: { id: '1' } }} />)
  getByText('HomeWorkout')
  getByText('Atualização de Aula')
  getAllByText('Nome da aula')
  getAllByText('Link da Aula')
  getAllByText('Descrição da Aula')
  getByText('Escolha a foto da sua aula')
  getByText('Salvar Atualização')
})
