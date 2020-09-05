import React, { useState, useEffect } from 'react';
import './PostDetail.css';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Comment from '../Comment/Comment';


const PostDetail = (props) => {
    const { postId } = useParams();

    const [postDetails, setPostDetails] = useState({});
    const [comments, setComments] = useState([])

    useEffect(()=> {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(res => res.json())
        .then(data => setPostDetails(data))
        .catch(error => alert(error))
     },[])

    useEffect(()=> {
        fetch(`http://jsonplaceholder.typicode.com/comments?postId=${postId}`)
        .then(res => res.json())
        .then(data => setComments(data))
    },[])
    
        const useStyles = makeStyles({
            root: {
              minWidth: 275,
              margin: 70,
              marginTop: 20
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

    const info  = postDetails;
    return (
        <>
            <h1>Post Information</h1>
            <Card className={classes.root} variant="outlined">
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                   ID : {info.id}
                </Typography>
                <Typography variant="h5" component="h3">
                    User ID : {info.userId}
                </Typography>
                <Typography variant="body4" component="h3">
                 <span className="post-title">Title :</span> {info.title}
                 <br />
                </Typography><br/>
                <Typography variant="body4" component="h2">
                   <span className="post-body"> Post :</span> {info.body}
                </Typography>
            </CardContent>
            <hr/>

            <div className="comment-section-style">
            <h1>All Comments :</h1>
            {
                comments.map(comment => <Comment key={comment.id} comment={comment}></Comment>)
            }
            </div>
           </Card>
           
        </>
    );
};

export default PostDetail;