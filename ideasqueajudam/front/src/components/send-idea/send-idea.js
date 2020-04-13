import React, { useEffect, useState, use } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import { useHistory } from 'react-router-dom'
import { saveIdea } from '../../services/idea/post'
import { getCategories } from '../../services/categories/get'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 30,
    maxWidth: 800,
    margin: '0 auto'
  },
  input: {
    display: 'none'
  },
  category: {
    width: '100%'
  }
}))

const SendIdea = ({ handleCancel }) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  // const [email, setEmail] = useState('')
  const [videoLink, setVideoLink] = useState('')
  const [materialLink, setMaterialLink] = useState('')
  const [imageLink, setImageLink] = useState('')
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('')
  const classes = useStyles()
  const history = useHistory()

  useEffect(() => {
    async function fetchCategories () {
      const response = await getCategories()
      setCategories(response.data)
    }

    fetchCategories()
  }, [])

  const submit = async () => {
    const payload = {
      titulo: title,
      descricao: description,
      link_youtube: videoLink,
      caminho_imagem: imageLink,
      material_complementar: materialLink,
      realizador: 'http://api.ideiasqueajudam.com/realizadores/1/',
      tema: selectedCategory
    }

    await saveIdea(payload)
    history.push('/')
  }

  return (
    <form noValidate autoComplete="off">
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <Typography variant='h5'>Ajude com a sua ideia</Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            onChange={event => setTitle(event.target.value)}
            value={title}
            fullWidth
            variant='outlined'
            label="Título da ideia"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            onChange={event => setDescription(event.target.value)}
            value={description}
            fullWidth
            multiline
            rows={5}
            variant='outlined'
            label="Nos fale mais sobre sua idea"
          />
        </Grid>
        {/*<Grid item xs={12}>*/}
        {/*  <TextField*/}
        {/*    onChange={event => setEmail(event.target.value)}*/}
        {/*    value={email}*/}
        {/*    fullWidth*/}
        {/*    label="Email de contato"*/}
        {/*    variant='outlined'*/}
        {/*    type='email'*/}
        {/*  />*/}
        {/*</Grid>*/}
        <Grid item xs={12}>
          <TextField
            onChange={event => setVideoLink(event.target.value)}
            value={videoLink}
            fullWidth
            label="Vídeo no Youtube?"
            variant='outlined'
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            onChange={event => setMaterialLink(event.target.value)}
            value={materialLink}
            fullWidth
            label="Link de material complementar"
            variant='outlined'
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            onChange={event => setImageLink(event.target.value)}
            value={imageLink}
            fullWidth
            label="Link da imagem do projeto"
            variant='outlined'
          />
          {/*<input*/}
          {/*  accept="image/*"*/}
          {/*  className={classes.input}*/}
          {/*  id='button-file'*/}
          {/*  multiple*/}
          {/*  type="file"*/}
          {/*/>*/}
          {/*<label htmlFor="button-file">*/}
          {/*  <Button variant="contained" component="span">*/}
          {/*    Imagem da ideia*/}
          {/*  </Button>*/}
          {/*</label> */}
        </Grid>
        <Grid item xs={12}>
          <FormControl variant="outlined" className={classes.category}>
            <InputLabel id="demo-simple-select-outlined-label">Categoria</InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={selectedCategory}
              onChange={event => setSelectedCategory(event.target.value)}
              label="Categoria"
            >
              {categories.map(category => {
                const { id, nome, url } = category
                return <MenuItem key={id} value={url}>{nome}</MenuItem>
              })}
            </Select>
          </FormControl>
        </Grid>
        {/*<Grid item xs={12}>*/}
        {/*  <TextField*/}
        {/*    fullWidth*/}
        {/*    label="Estado"*/}
        {/*    variant='outlined'*/}
        {/*  />*/}
        {/*</Grid>*/}
        {/*<Grid item xs={12}>*/}
        {/*  <TextField*/}
        {/*    fullWidth*/}
        {/*    label="Cidade"*/}
        {/*    variant='outlined'*/}
        {/*  />*/}
        {/*</Grid>*/}
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
            <Button
              onClick={submit}
              variant="contained"
              color="primary">
              Enviar
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </form>
  )
}

export default SendIdea
