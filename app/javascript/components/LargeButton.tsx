import React from 'react'
import Button, { ButtonProps } from '@material-ui/core/Button'
import { createStyles, makeStyles } from '@material-ui/core/styles'

export default function LargeButton(props: ButtonProps) {
  const classes = useStyles()

  return <Button
    className={classes.button}
    size='large'
    variant='contained'
    {...props}
  />
}

const useStyles = makeStyles(() =>
  createStyles({
    button: {
      marginTop: '0.8rem',
    },
  }),
)
