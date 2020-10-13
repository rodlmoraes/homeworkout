import React from 'react'
import { render } from '@testing-library/react'

import LessonForm from '../../pages/LessonForm'

test('renders LessonForm', () => {
  const { getByText, getAllByText } = render(<LessonForm />)
  getByText('Cadastro de Aula')
  getAllByText('Nome da aula')
  getAllByText('Link da Aula')
  getAllByText('Descrição da Aula')
  getByText('Salvar Cadastro')
})

test('renders HeaderLessonForm', () => {
  const { getByText } = render(<LessonForm />)
  getByText('HomeWorkout')
})
