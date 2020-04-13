import React, { useState, useEffect } from 'react'
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
import { useParams } from "react-router-dom";
import Modal from '../modal/modal'
import PromoteIdea from '../promote-idea/promote-idea'
import Share from '../share/share'
import { getIdea } from '../../services/idea/get'
import { promoteIdeia } from '../../services/promote/post'
import { formatDateTime } from '../../utils/formatDateTime'

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
  const [dataIdea, setDataIdea] = useState({})
  const { titulo, criado_em, descricao, url, caminho_imagem } = dataIdea
  const { id } = useParams()
  const classes = useStyles()

  useEffect(() => {
    async function fetchIdea() {
      const response = await getIdea(id)
      response && setDataIdea(response.data)
    }

    fetchIdea()
  }, [])

  const sendIdea = async data => {
    // await promoteIdeia(payload)
    setOpen(false)
  }

  return (
    <>
      <Modal
        closeModal={() => setOpen(false)}
        open={open}>
          <PromoteIdea
            onCancel={() => setOpen(false)}
            onSend={sendIdea}
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
          <Typography variant='h3'>{titulo}</Typography>
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
                      {formatDateTime(criado_em)}
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
                  {descricao}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Grid container justify='space-between'>
                <Button
                  onClick={() => setOpen(true)}
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
