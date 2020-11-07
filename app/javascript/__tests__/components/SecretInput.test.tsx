import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import SecretInput from '../../components/SecretInput'

test('renders LessonForm', () => {
  const { getAllByText, getByTestId } = render(<SecretInput />)
  
  getAllByText('Senha')
  const iconButton = getByTestId('icon')

  fireEvent.click(iconButton)
})
