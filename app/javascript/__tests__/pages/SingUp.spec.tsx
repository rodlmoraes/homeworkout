import React from 'react'
import { render } from '@testing-library/react'

import SignUp from '../../pages/SignUp'

test('renders SignUp', () => {
  const { getByText, getAllByText } = render(<SignUp/>)
  getByText('HomeWorkout')
  getByText('Cadastre-se e adicione novas aulas!')
  getAllByText('Nome')
  getAllByText('Email')
  getAllByText('Senha')
  getByText('Cadastrar')
})
