import React from 'react';
import Post from './Post/Post';
import useStyles from './styles';
import { useSelector } from 'react-redux';

const Posts = () => {
    const posts = useSelector((state) => state.posts)
    const classes = useStyles();

    console.log(posts);
    return (
        <div>
            <h1 >Posts</h1>
            <Post />
        </div>
    );
};

export default Posts;