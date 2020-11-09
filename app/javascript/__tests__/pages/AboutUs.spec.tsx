import React from 'react'
import { render } from '@testing-library/react'

import AboutUs from '../../pages/AboutUs'

test('renders AboutUs', () => {
  const { getByText} = render(<AboutUs />)
  getByText('Empresa')
  getByText('Rogério')
  getByText('Rodrigo')
  getByText('Carolina')
  getByText('Julia')
  getByText('João')
  getByText('Vinícius')
})

