import React, { useEffect, useState } from "react";
import { Grid  } from "@material-ui/core";
import { useSelector } from "react-redux";
import SinglePostSkeleton from '../../Skeleton/SinglePostSkeleton/SinglePostSkeleton';

import Post from "./Post/Post";
import useStyles from "./styles";

const Posts = ({ setCurrentId }) => {
  const [timer, setTimer] = useState(true);
  const { posts, isLoading } = useSelector((state) => state.posts);
  console.log(JSON.stringify(posts));
  const classes = useStyles();

  useEffect(() => {
    setTimeout(() => {
      setTimer(false);
    }, 4000);
  }, []);

  if (!posts.length && !isLoading) return 'No posts';

  return  ((isLoading && timer ) || ( !isLoading && timer)) ? 
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
};

export default Posts;