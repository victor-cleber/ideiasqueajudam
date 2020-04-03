import React from 'react'
import { Select } from 'antd'
import 'antd/dist/antd.css'
import { makeStyles } from '@material-ui/core/styles'
const { Option } = Select

const useStyles = makeStyles({
  select: {
    width: 150
  }
})

const Dropdown = ({ onChange, options }) => {
  const classes = useStyles()

  return (
    <>
      <Select
        className={classes.select}
        defaultValue='Selecione'
        onChange={value => onChange(value)}>
        {options.map(option => {
          const {id, value } = option
          return <Option value={id}>{value}</Option>
        })}
      </Select>
    </>
  )}

export default Dropdown
