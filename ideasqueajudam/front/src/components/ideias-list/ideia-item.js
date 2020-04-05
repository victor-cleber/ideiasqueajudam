import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  container: {
    width: '100%'
  },
  media: {
    height: 140,
  },
  datetime: {
    fontSize: 12
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


const IdeaItem = () => {
  const classes = useStyles();

  return (
    <Card className={classes.container}>
      <CardActionArea>
        <Typography className={classes.category}>
          inspiration
        </Typography>
        <CardMedia
          className={classes.media}
          image="https://espacofiteventos.com.br/wp-content/uploads/2018/06/Como-ter-uma-boa-ideia-profissional--1000x580.jpg"
          title="ideia"
        />
        <CardContent>
          <Typography
            gutterBottom
            color="textSecondary"
            className={classes.datetime}
          >
            18 de Abril, 2020
          </Typography>
          <Typography variant="body2">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="secondary">
          Leia Mais
        </Button>
      </CardActions>
    </Card>
  )
}

export default IdeaItem
