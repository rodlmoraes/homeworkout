import React from 'react'
import { render, waitFor } from '@testing-library/react'

import LessonList from '../../pages/LessonList'

jest.mock('../../services/api', () => ({
  get: () => Promise.resolve({ data: [] }),
}))

test('renders LessonList', async () => {
  const { getByText } = render(<LessonList />)
  await waitFor(() => getByText('Aulas disponíveis'))
  await waitFor(() => getByText('HomeWorkout'))
})
