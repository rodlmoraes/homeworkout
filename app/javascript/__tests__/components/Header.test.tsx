import React from 'react'
import { fireEvent, render } from '@testing-library/react'

import Header from '../../components/Header'

test('renders Header', () => {
  const { getByText, getByTestId } = render(<Header />)

  getByText('HomeWorkout')
  const menuButton = getByTestId('menu-button')
  fireEvent.click(menuButton)

  getByText('Lista de aulas')
  getByText('Entrar')
  getByText('Cadastrar')
  getByText('Sobre nós')

  getByTestId('login-button')
})
