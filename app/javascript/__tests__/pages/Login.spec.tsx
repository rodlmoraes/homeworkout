import React from 'react'
import { render } from '@testing-library/react'

import Login from '../../pages/Login'

test('renders LessonForm', () => {
  const { getByText, getAllByText } = render(<Login/>)
  getByText('HomeWorkout')
  getByText('Entre e adicione novas aulas!')
  getAllByText('Email')
  getAllByText('Senha')
})
