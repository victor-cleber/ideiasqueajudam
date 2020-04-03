import React from 'react'
import { NavLink } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  list: props => ({
    display: 'flex',
    flexDirection: props.isVertical ? 'column' : 'row',
    '& li': {
      listStyle: 'none',
      marginRight: 15,
      '& a': {
        textDecoration: 'none',
        color: props.textColor ? props.textColor : 'white',
        fontSize: 18
      }
    }
  })
}))

const Routes = ({ isVertical, textColor }) => {
  const props = {
    isVertical,
    textColor
  }
  const classes = useStyles(props)

  return (
    <div>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to='/saude'>Saúde</NavLink>
          </li>
          <li>
            <NavLink
              to="/educacao">Educação</NavLink>
          </li>
          <li>
            <NavLink
              to="/economia">Economia</NavLink>
          </li>
          <li>
            <NavLink
              to="/social">Social</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Routes
