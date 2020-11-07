import { TextFieldProps, InputAdornment, IconButton } from '@material-ui/core'
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import React, { useState } from 'react'
import TextInput from './TextInput';

export default function SecretInput(props: TextFieldProps) {
  const [showPassword, setShowPassword] = useState(false)

  return <TextInput
    name='Senha'
    label='Senha'
    placeholder='Digite aqui sua senha'
    type={showPassword ? '' : 'Password'}
    InputProps={{
      endAdornment: (
        <InputAdornment position="end">
          <IconButton data-testid='icon' onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <Visibility /> : <VisibilityOff />}
          </IconButton>
        </InputAdornment>
      )
    }}
    {...props}
  />
}
