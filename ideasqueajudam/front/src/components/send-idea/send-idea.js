import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 30
  },
  input: {
    display: 'none'
  }
}))

const SendIdea = ({ handleCancel }) => {
  const classes = useStyles()

  return (
    <form noValidate autoComplete="off">
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <Typography variant='h5'>Ajude com a sua ideia</Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            variant='outlined'
            label="Título da ideia"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            multiline
            rows={5}
            variant='outlined'
            label="Nos fale mais sobre sua idea"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Email de contato"
            variant='outlined'
            type='email'
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Vídeo no Youtube?"
            variant='outlined'
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Link de material complementar"
            variant='outlined'
          />
        </Grid>
        <Grid item xs={12}>
          <input
            accept="image/*"
            className={classes.input}
            id='button-file'
            multiple
            type="file"
          />
          <label htmlFor="button-file">
            <Button variant="contained" component="span">
              Imagem da ideia
            </Button>
          </label> 
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Estado"
            variant='outlined'
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Cidade"
            variant='outlined'
          />
        </Grid>
        <Grid
          container
          item
          justify="flex-end"
          spacing={2}
        >
          <Grid item>
            <Button variant="contained" color="primary" onClick={handleCancel}>
              Cancelar
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary">
              Enviar
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </form>
  )
}

export default SendIdea
