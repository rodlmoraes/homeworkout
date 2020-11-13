import React from 'react'
import { render, waitFor } from '@testing-library/react'

import LessonPage from '../../pages/LessonPage'

jest.mock('../../services/api', () => ({
  get: () => Promise.resolve({ data: null }),
}))

test('renders LessonPage (hit, Timeout of 1s)', async () => {
  const { getByText } = render(<LessonPage match={{ params: { id: 1 } }} />)
  await waitFor(() => getByText('HomeWorkout'))
})

test('renders LessonPage (no hit)', async () => {
  const { getByText } = render(<LessonPage match={{ params: { id: -1 } }} />)
  await waitFor(() => getByText('HomeWorkout'))
  getByText('Aula não encontrada')
})
