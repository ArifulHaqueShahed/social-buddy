import React from 'react';
import './Picture.css';

const Picture = (props) => {
    const { picture} = props.picture;
    return (
        <div>
            <img className="img-style" src={picture.large} alt=""/>
        </div>
    );
};

export default Picture;