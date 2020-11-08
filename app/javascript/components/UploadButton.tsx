import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { uploadFile } from 'react-s3'
import config from '../utils/awsConfig'
import { SvgIcon } from '@material-ui/core'
import PublishIcon from '@material-ui/icons/Publish'

export default function LargeButton() {
  const classes = useStyles()
  const [image, setImage] = useState('')

  const handleChange = event => {
    uploadFile(event.target.files[0], config)
      .then(({ location }) => setImage(location))
      .catch(err => console.error(err))
  }

  return (
    <>
      <input type='file'
        id='fileUploadButton'
        style={{ display: 'none' }}
        onChange={handleChange}
      />
      <label htmlFor={'fileUploadButton'}>
        <Button
          className={classes.button}
          color='primary'
          variant='contained'
          component='span'
          startIcon={
            <SvgIcon fontSize='small'>
              <PublishIcon />
            </SvgIcon>
          }
        >
          Escolha sua Imagem
        </Button>
      </label>
      <img src={image} />
    </>
  )
}

const useStyles = makeStyles(() =>
  createStyles({
    button: {
      marginTop: '0.8rem',
    },
  }),
)
