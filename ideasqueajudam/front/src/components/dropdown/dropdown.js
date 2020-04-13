import React, { useState } from 'react'
import Select from '@material-ui/core/Select'
import { makeStyles } from '@material-ui/core/styles'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'

const useStyles = makeStyles({
  category: {
    width: 200
  }
})

const Dropdown = ({ onChange, options }) => {
  const [selectedCategory, setSelectedCategory] = useState('')
  const classes = useStyles()

  const handleOnChange = value => {
    setSelectedCategory(value)
    onChange(value)
  }

  return (
    <FormControl variant="outlined" className={classes.category}>
      <InputLabel id="demo-simple-select-outlined-label">Categorias</InputLabel>
      <Select
        labelId="demo-simple-select-outlined-label"
        id="demo-simple-select-outlined"
        value={selectedCategory}
        onChange={event => handleOnChange(event.target.value)}
        label="Categoria"
      >
        {options.map(option => {
          const { id, nome, url } = option
          return <MenuItem key={url} value={url}>{nome}</MenuItem>
        })}
      </Select>
    </FormControl>
  )}

export default Dropdown
