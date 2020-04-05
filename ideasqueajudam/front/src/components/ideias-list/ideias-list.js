import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import IdeaItem from './ideia-item'

const useStyles = makeStyles(theme => ({
  containerItem: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 15,
    [theme.breakpoints.up('md')]: {
      maxWidth: 320
    }
  }
}))

const IdeiasList = () => {
  const classes = useStyles()

  const Row = () => {
    return (
      <>
        <Grid className={classes.containerItem} item xs={12} sm={6} md={4}>
          <IdeaItem />
        </Grid>
        <Grid className={classes.containerItem} item xs={12} sm={6} md={4}>
          <IdeaItem />
        </Grid>
        <Grid className={classes.containerItem} item xs={12} sm={6} md={4}>
          <IdeaItem />
        </Grid>
      </>
    )
  }
  return (
    <Grid container justify='space-between' spacing={3}>
      <Row />
      <Row />
      <Row />
    </Grid>
  )
}

export default IdeiasList
