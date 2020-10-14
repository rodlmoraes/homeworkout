import React, { createContext, PropsWithChildren, useContext, useState } from 'react'
import { createStyles, makeStyles, Snackbar, SnackbarContent, Theme, Typography } from '@material-ui/core'

const AUTO_HIDE_TIME = 5 * 1000

export type AlertContextData = {
  showAlert: (alertText: string) => void
}

const AlertContext = createContext<AlertContextData>({} as AlertContextData)

export function AlertProvider({ children }: PropsWithChildren<unknown>) {
  const [alert, setAlert] = useState<string | null>(null)
  const classes = useStyles()

  const providerValue = { showAlert: setAlert }

  return (
    <AlertContext.Provider value={providerValue}>
      {children}
      {alert &&
        <Snackbar
          open={!!alert}
          onClose={() => setAlert(null)}
          autoHideDuration={AUTO_HIDE_TIME}
        >
          <SnackbarContent
            message={<Typography variant='h6' >{alert}</Typography>}
            className={classes.content}
          />
        </Snackbar>}
    </AlertContext.Provider>
  )
}

export const useAlert = () => useContext(AlertContext)

export default AlertContext

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.palette.primary.main,
    },
  }),
)
