import React from "react";
import { Grid  } from "@material-ui/core";
import { useSelector } from "react-redux";
import SinglePostSkeleton from '../../Skeleton/SinglePostSkeleton/SinglePostSkeleton';

import Post from "./Post/Post";
import useStyles from "./styles";

const Posts = ({ setCurrentId }) => {
  const { posts, isLoading } = useSelector((state) => state.posts);
  console.log(JSON.stringify(posts));
  const classes = useStyles();
  if (!posts.length && !isLoading) return 'No posts'
  return (isLoading ?

    <div style={{ display: 'flex', flexWrap:'wrap' }}>
      {[1, 2, 3, 4, 5, 6, 7, 8].map((loading) => (
      <div style={{width:'200px', padding:'10px', marginBottom:'10px'}}>
        <SinglePostSkeleton />
      </div>
      ))}
    </div>

    :
    
    (
      <Grid
        className={classes.container}
        container
        alignItems="stretch"
        spacing={3}
      >
        {posts.map((post) => (
          <Grid key={post._id} item xs={12} sm={12} md={6} lg={3}>
            <Post post={post} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>
    )
  )
};

export default Posts;

// .row {
//   display: flex;
//   flex-wrap: wrap;
// }
// .col-3 {
//   width: 25%;
//   padding: 15px;
// }