import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import IdeaItem from './ideia-item'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '15px',
    [theme.breakpoints.up('sm')]: {
      gridTemplateColumns: '1fr 1fr',
      gap: '15px 30px',
    },
    [theme.breakpoints.up('md')]: {
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: '15px 30px',
    }
  },
}))

const IdeiasList = ({ ideas }) => {
  console.log('ideas', ideas)
  const classes = useStyles()

  const renderContent = () => {
    console.log('ideas dentro de renderContent', ideas)

    if (ideas.length > 0) {
      return ideas.map(idea =>
        <IdeaItem key={idea.url} idea={idea}/>
      )
    }
  }

  return (
    <div className={classes.root}>
      { renderContent() }
    </div>
  )
}

export default IdeiasList
