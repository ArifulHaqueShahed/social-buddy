import React from 'react';

const Comment = (props) => {
    const { email, name } = props.comment;
    return (
        <div>
            <p>Name : {name}</p>
            <p>Email : {email}</p>
        </div>
    );
};

export default Comment;