import React from 'react'
import Button from '@material-ui/core/Button'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { uploadFile } from 'react-s3'
import config from '../utils/awsConfig'
import { SvgIcon } from '@material-ui/core'
import PublishIcon from '@material-ui/icons/Publish'

type UploadButtonProps = {
  image: string
  setImage: (image: string) => void
  buttonText: string
}

export default function UploadButton({ image, setImage, buttonText } : UploadButtonProps) {
  const classes = useStyles()

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
          {buttonText}
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
