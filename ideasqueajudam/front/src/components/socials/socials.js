import React from 'react'
import {
  Twitter,
  Facebook,
  Instagram
} from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  container: {
    '& a': {
      marginRight: 10
    },
    '& svg': {
      fill: 'white'
    }
  }
})

const Socials = () => {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <a href='https://twitter.com' target='_blank'>
        <Twitter />
      </a>
      <a href='https://instagram.com' target='_blank'>
        <Instagram />
      </a>
      <a href='https://facebook.com' target='_blank'>
        <Facebook />
      </a>
    </div>
  )
}

export default Socials
