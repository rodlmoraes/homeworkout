import React from 'react'
import { render } from '@testing-library/react'

import LessonCard from '../../components/LessonCard'
import { Teacher } from '../../contexts/auth'

test('renders LessonCard', () => {
  const { getByText } = render(<LessonCard
    id='1' name='Carol' description='olar' link='' image='' teacher={{}as Teacher} />)

  getByText('Carol')
  getByText('olar')
  getByText('Detalhes')
})
