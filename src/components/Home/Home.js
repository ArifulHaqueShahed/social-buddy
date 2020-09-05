import React, { useState, useEffect } from 'react';
import Post from '../Post/Post';
import Navbar from '../Navbar/Navbar';


const Home = () => {
    const [posts, setPosts] = useState([]);
    useEffect(()=>{
        const url = 'https://jsonplaceholder.typicode.com/posts';
        fetch(url)
        .then(res => res.json())
        .then(data => setPosts(data))
    },[])
    return (
        <>
            <Navbar></Navbar> 
            
            {
                posts.map(post => <Post key={post.id} post={post}></Post>)
            }
            
        </>
    );
};

export default Home;