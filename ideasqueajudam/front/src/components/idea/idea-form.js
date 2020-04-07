import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '100%'
    },
    '& .MuiButtonBase-root': {
      marginLeft: 10
    },
  },
}))

const IdeaForm = ({ handleCancel }) => {
  const classes = useStyles()

  return (
    <form noValidate className={classes.root} autoComplete="off">
      <div>
        <Typography variant='h5'>Promova a ideia XYZ</Typography>
        <TextField variant='outlined' label="Seu nome" />
        <TextField variant='outlined' label="Seu email" />
        <TextField
          rows={5}
          multiline
          label="Escreva uma mensagem para o criador da ideia"
          variant='outlined'
        />
        <Grid
          container
          direction="row"
          justify="flex-end"
          alignItems="center">
          <Grid item>
            <Button variant="contained" color="primary" onClick={handleCancel}>
              Cancelar
              </Button>
            <Button variant="contained" color="primary">
              Enviar
              </Button>
          </Grid>
        </Grid>
      </div>
    </form>
  )
}

export default IdeaForm
