import React from 'react'
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  EmailShareButton,
  EmailIcon
} from 'react-share'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    display: 'flex'
  },
  shareButton: {
    marginRight: '5px',
    outline: 0
  }
})


const Share = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <FacebookShareButton
        className={classes.shareButton}
        url='https://google.com'>
        <FacebookIcon size={35} round />
      </FacebookShareButton>
      <TwitterShareButton
        className={classes.shareButton}
        url='https://google.com'
      >
        <TwitterIcon
          size={35}
          round
          iconBgStyle={{ fill: '#49A0EB' }}
        />
      </TwitterShareButton>
      <EmailShareButton
        openWindow
        className={classes.shareButton}
        url='https://google.com'
      >
        <EmailIcon
          size={35}
          round
          iconBgStyle={{ fill: '#EBF1FF' }}
          logoFillColor='black'
        />
      </EmailShareButton>
    </div>
  )
}

export default Share
