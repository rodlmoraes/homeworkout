import React from 'react'
import { render } from '@testing-library/react'

import SignUp from '../../pages/SignUp'

test('renders SignUp', () => {
  const { getAllByText } = render(<SignUp/>)
  getAllByText('Email')
  getAllByText('Senha')
  getAllByText('Nome')
})
