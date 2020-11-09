import React from 'react'
import { render, waitFor } from '@testing-library/react'

import LessonPage from '../../pages/LessonPage'

jest.mock('../../services/api', () => ({
  get: () => Promise.resolve({ data: [] }),
}))

/*
test('renders LessonPage (hit, Timeout of 1s)', async () => {
  const { getByText, getAllByText } = render(<LessonPage match={{  params: { id: 1 }}} />)
  await waitFor(() => getByText('HomeWorkout'))
  expect(setTimeout(() => {
    getAllByText('Zumba 101')
    getAllByText('Aula de zumba para iniciantes')
  }, 1000))
})
*/

test('renders LessonPage (no hit)', async () => {
  const { getByText, getAllByText } = render(<LessonPage match={{  params: { id: -1 }}} />)
  await waitFor(() => getByText('HomeWorkout'))
  expect(getAllByText('Aula não encontrada'))
})
