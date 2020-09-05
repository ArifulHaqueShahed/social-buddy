import React from 'react';
import './Post.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const Post = (props) => {
    const useStyles = makeStyles({
        root: {
          minWidth: 275,
          margin: 40,
          marginTop: 60,
          paddingTop: 30
        },
        bullet: {
          display: 'inline-block',
          margin: '0 2px',
          transform: 'scale(0.8)',
        },
        title: {
          fontSize: 20,
        },
        pos: {
          marginBottom: 12,
        },
      });
    const classes = useStyles();

    const { userId, id, title} = props.post;
    return (
        <Card className={classes.root} variant="outlined">
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                   ID : {id}
                </Typography>
                <Typography variant="h5" component="h2">
                    User ID : {userId}
                </Typography>
                <Typography variant="body4" component="h4">
                 <span className="post-title">Title :</span> {title}
                 <br />
                </Typography>
            </CardContent>
            <CardActions>
                <Link className="link-style" to={`/posts/${id}`}><Button size="small" variant="contained" color="secondary">Read More</Button></Link>
            </CardActions>
        </Card>
    );
};

export default Post;