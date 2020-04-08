import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import EmojiObjectsOutlinedIcon from '@material-ui/icons/EmojiObjectsOutlined';
import Modal from '../modal/modal'
import PromoteIdea from '../promote-idea/promote-idea'
import Share from '../share/share'

const useStyles = makeStyles({
  root: {
    padding: 20,
    width: '100%'
  },
  card: {
    width: '100%'
  },
  media: {
    height: 0,
    paddingTop: '35%',
  },
  category: {
    position: 'absolute',
    left: 5,
    top: 5,
    backgroundColor: 'orange',
    color: 'white',
    padding: '0 5px',
    fontSize: 12,
    textTransform: 'uppercase',
    borderRadius: 5
  }
})


const Idea = () => {
  const [open, setOpen] = useState(false)
  const classes = useStyles()

  const openModal = () => {
    setOpen(true)
  }
  const closeModal = () => {
    setOpen(false)
  }

  return (
    <>
      <Modal
        closeModal={closeModal}
        open={open}>
          <PromoteIdea
            onCancel={closeModal}
          />
      </Modal>
      <Grid
        container
        direction='column'
        alignItems='center'
        spacing={2}
        className={classes.root}
      >
        <Grid container item xs={12} md={11} alignItems='flex-start'>
          <Typography variant='h3'>Nome da Ideia (Tipo)</Typography>
        </Grid>
        <Grid item xs={12} md={11} className={classes.card}>
          <Card>
            <CardActionArea>
              <Typography className={classes.category}>
                inspiration
              </Typography>
              <CardMedia
                className={classes.media}
                image='https://espacofiteventos.com.br/wp-content/uploads/2018/06/Como-ter-uma-boa-ideia-profissional--1000x580.jpg'
                title="ideia"
              />
              <CardContent>
                <Grid container justify='space-between'>
                  <Grid item xs>
                    <Typography
                      gutterBottom
                      color='textSecondary'
                      variant='overline'
                    >
                      18 de Abril, 2020
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      gutterBottom
                      color='textSecondary'
                      variant='overline'
                    >
                      Impacto
                        <EmojiObjectsIcon color="primary" />
                        <EmojiObjectsIcon color="primary" />
                        <EmojiObjectsIcon color="primary" />
                        <EmojiObjectsOutlinedIcon color="primary" />
                        <EmojiObjectsOutlinedIcon color="primary" />
                    </Typography>
                  </Grid>
                </Grid>
                <Typography variant='body2'>
                  Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                  across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Grid container justify='space-between'>
                <Button
                  onClick={() => openModal()}
                  size='small'
                  color='primary'
                >
                  Promova essa ideia...
                </Button>
                <Share />
              </Grid>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </>
  )
}

export default Idea
