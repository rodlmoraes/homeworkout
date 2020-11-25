import React from 'react'
import { render, waitFor } from '@testing-library/react'

import LessonPage from '../../pages/LessonPage'

jest.mock('../../services/api', () => ({
  get: () => Promise.resolve({ data: null }),
}))

test('renders LessonPage', async () => {
  const { getByText } = render(<LessonPage match={{ params: { id: 1 } }} />)
  await waitFor(() => getByText('HomeWorkout'))
  await waitFor(() => getByText('Aula não encontrada'))
})

test('verify text', async () => {
  const { getByText } = render(<LessonPage match={{ params: { id: 1 } }}/>)
  getByText('Com prof.')
  getByText('Contatos:')
  getByText('Contato por WhatsApp')
})
