import React, { useState } from 'react'
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

const PromoteIdea = ({ onCancel, onSend }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const classes = useStyles()

  const handleSend = () => {
    const data = {
      name,
      email,
      message
    }
    onSend(data)
  }

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <Grid container justify='space-between'>
          <Typography variant='h5'>Promova a ideia XYZ</Typography>
        </Grid>
        <TextField
          value={name}
          onChange={event => setName(event.target.value)}
          variant='outlined'
          label="Seu nome" />
        <TextField
          value={email}
          onChange={event => setEmail(event.target.value)}
          variant='outlined'
          label="Seu email" />
        <TextField
          value={message}
          onChange={event => setMessage(event.target.value)}
          variant='outlined'
          rows={5}
          multiline
          label="Escreva uma mensagem para o criador ou divulgador da ideia" />
        <Grid
          container
          direction='row'
          justify="flex-end"
          alignItems="center">
          <Grid item>
            <Button
              onClick={onCancel}
              variant="contained" color="primary">
              Cancelar
            </Button>
            <Button
              onClick={handleSend}
              variant="contained"
              color="primary">
              Enviar
            </Button>
          </Grid>
        </Grid>
      </div>
    </form>
  )
}

export default PromoteIdea
