import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const rootStyles = {
  'maxWidth': '345'
}

const mediaStyles = {
  'height': '140'
}

interface MediaCardProps {
  name: string,
  bio: string,
  imageUrl: string
}

export default function MediaCard(props: MediaCardProps) {
  const {
    name,
    bio,
    imageUrl
  } = props;

  console.log(imageUrl);

  return (
    <Card style={rootStyles}>
      <CardActionArea>
        <CardMedia
          style={mediaStyles}
          src={imageUrl}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {bio}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}