import React, { useState, useEffect } from 'react';
import './Comment.css';
import Picture from '../Picture/Picture';

const Comment = (props) => {
    const [pictures, setPictures] = useState([]);
    useEffect(()=> {
        fetch('https://randomuser.me/api')
        .then(res => res.json())
        .then(data => setPictures(data.results))
    },[])
    const { email, name, body, id} = props.comment;
    return (
        <div className="comment-style row">
            <div className="column">
                <h4>ID : {id}</h4>
                <h5>Comment : {body}</h5>
                <p>Name : {name}</p>
                <p>Email : {email}</p>
            </div>
            <div className="column">
                {
                    pictures.map(picture => <Picture picture={picture}></Picture>)
                }
            </div>
        </div>
    );
};

export default Comment;