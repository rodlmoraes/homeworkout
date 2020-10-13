import { TextField, TextFieldProps } from '@material-ui/core'
import React from 'react'

export default function TextInput(props: TextFieldProps) {
  return <TextField
    margin='normal'
    fullWidth
    variant='outlined'
    {...props}
  />
}
