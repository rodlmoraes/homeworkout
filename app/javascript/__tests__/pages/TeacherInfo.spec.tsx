import React from 'react'
import { render } from '@testing-library/react'

import TeacherInfo from '../../pages/TeacherInfo'

jest.mock('react-s3', () => ({
  uploadFile: () => Promise.resolve({ data: [] }),
}))

jest.mock('../../services/api', () => ({
  get: () => Promise.resolve({ data: null }),
}))

test('renders TeacherInfo', () => {
  const { getByText, getAllByText } = render(<TeacherInfo />)
  getByText('HomeWorkout')
  getByText('Suas informações')
  getAllByText('Nome')
  getAllByText('Phone')
  getByText('Escolha sua foto de perfil')
  getByText('Salvar Cadastro')
})
