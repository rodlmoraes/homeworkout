import React from 'react'
import { render } from '@testing-library/react'

import LessonList from '../../pages/LessonList'

test('renders LessonList', () => {
  const { getByText } = render(<LessonList />)
  getByText('Aulas disponíveis')
})

test('renders HeaderLessonList', () => {
  const { getByText } = render(<LessonList />)
  getByText('HomeWorkout')
})
