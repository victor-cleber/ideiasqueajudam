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
    '& .MuiFormLabel-root.Mui-focused': {
      color: 'rgba(0, 0, 0, .5)'
    },
    '& .MuiButtonBase-root': {
      marginLeft: 10
    },
    '& .MuiButton-label': {
      color: 'white'
    }
  },
}))

const IdeaForm = () => {
  const classes = useStyles()

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <Typography variant='h5'>Promova a ideia XYZ</Typography>
        <TextField  label="Seu nome" />
        <TextField label="Seu email" />
        <TextField
          rows={5}
          multiline
          label="Escreva uma mensagem para o criador da ideia" />
          <Grid
            container
            direction='row'
            justify="flex-end"
            alignItems="center">
            <Grid item>
              <Button variant="contained" color="secondary">
                Cancelar
              </Button>
              <Button variant="contained" color="secondary">
                Enviar
              </Button>
            </Grid>
          </Grid>
      </div>
    </form>
  )
}

export default IdeaForm
