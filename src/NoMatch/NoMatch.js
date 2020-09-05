import React from 'react';

const NoMatch = () => {
    const style = {
        color:'red'
    }
    return (
        <div>
            <h1>Page Not Found !!</h1>
            <h1 style={style}>ERROR !!!</h1>
        </div>
    );
};

export default NoMatch;