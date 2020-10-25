import React from 'react'
import { render } from '@testing-library/react'

import Login from '../../pages/SignUp'

test('renders LessonForm', () => {
  const { getByText, getAllByText } = render(<Login/>)
  getByText('HomeWorkout')
  getByText('Cadastre-se e adicione novas aulas!')
  getAllByText('Email')
  getAllByText('Senha')
  getByText('Cadastrar')
})