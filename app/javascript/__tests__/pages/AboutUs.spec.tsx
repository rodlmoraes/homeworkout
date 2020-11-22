import React from 'react'
import { render } from '@testing-library/react'

import AboutUs from '../../pages/AboutUs'

test('renders AboutUs', () => {
  const { getByText } = render(<AboutUs/>)
  getByText('Rogério Ferreira')
  getByText('Rodrigo Moraes')
  getByText('Carolina Galvão')
  getByText('Júlia Passos')
  getByText('João Fukuda')
  getByText('Vinícius Bueno')
})
