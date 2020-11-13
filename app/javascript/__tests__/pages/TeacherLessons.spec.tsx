import React from 'react'
import { render, waitFor } from '@testing-library/react'

import TeacherLessons from '../../pages/TeacherLessons'

jest.mock('../../services/api', () => ({
  get: () => Promise.resolve({ data: [] }),
}))

test('renders TeacherLessons', async () => {
  const { getByText } = render(<TeacherLessons />)
  await waitFor(() => getByText('Nome'))
  await waitFor(() => getByText('Descrição'))
  await waitFor(() => getByText('Link'))
  await waitFor(() => getByText('Adicionar'))
})
