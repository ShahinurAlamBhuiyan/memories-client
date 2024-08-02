import React, { useEffect, useState } from "react";
import { Paper, Typography, Divider } from "@material-ui/core";
import CommentSection from "./CommentSection";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { useParams, useHistory } from "react-router-dom";
import { getPost, getPostsBySearch } from "../../actions/posts";
import useStyles from "./styles";
import PostDetailsSkeleton from "../../Skeleton/PostDetailsSkeleton/PostDetailsSkeleton";

const PostDetails = () => {
  const [timer, setTimer] = useState(true);
  const { post, posts, isLoading } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getPost(id));
  }, [id]);

  useEffect(() => {
    if (post) {
      dispatch(
        getPostsBySearch({ search: "none", tags: post?.tags.join(",") })
      );
    }
  }, [post]);

  useEffect(() => {
    setTimeout(() => {
      setTimer(false);
    }, 4000);
  }, []);

  if (!post) return null;
  

  const openPost = (_id) => history.push(`/posts/${_id}`);

  if ((isLoading && timer) || (!isLoading === timer)) {
    return <PostDetailsSkeleton />;
  }

  const recommendedPosts = posts.filter(({ _id }) => _id !== post._id);
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + " ....." : string;
  }
  return (
    <Paper style={{ padding: "20px", borderRadius: "15px" }} elevation={6}>
      <div className={classes.card}>
        <div className={classes.section}>
          <Typography variant="h3" component="h2">
            {post.title}
          </Typography>
          <Typography
            gutterBottom
            variant="h6"
            color="textSecondary"
            component="h2"
          >
            {post.tags.map((tag) => `#${tag} `)}
          </Typography>
          <Typography gutterBottom variant="body1" component="p">
            {post.message}
          </Typography>
          <Typography variant="h6">Created by: {post.name}</Typography>
          <Typography variant="body1">
            {moment(post.createdAt).fromNow()}
          </Typography>
          <Divider style={{ margin: "14px 0" }} />
          <Typography variant="body1">
            <strong>Realtime Chat</strong>
          </Typography>
          <Divider style={{ margin: "20px 0" }} />
          <CommentSection post={post} />
          <Divider style={{ margin: "11px 0" }} />
        </div>
        <div className={classes.imageSection}>
          <img
            className={classes.media}
            src={
              post.selectedFile ||
              "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
            }
            alt={post.title}
          />
        </div>
      </div>
      {!!recommendedPosts.length && (
        <div className={classes.section} >
            <Typography variant="h5" gutterBottom >You might also like :</Typography>
            <Divider/>
            <div raised elevation={6}  className={classes.recommendedPosts}>
                {
                  recommendedPosts.map(({title,message, name, likes, selectedFile, _id}) =>(
                    <Paper elevation={6}  style={{ margin: "10px", padding: "20px" ,cursor: "pointer",borderRadius: "15px"}} onClick={() => openPost(_id)} key={_id}>
                      <Typography variant="h6" gutterBottom>{title}</Typography>
                      <Typography style={{ fontWeight: 600 }} color="primary" variant="subtitle2" gutterBottom>{name}</Typography>
                      <Typography variant="subtitle2" gutterBottom>{truncate(message, 30)}</Typography>
                      <Typography variant="subtitle1" gutterBottom>Likes: {likes.length}</Typography>
                      <img style={{borderRadius: "7px", maxHeight:'150px', width:'200px'}} src={selectedFile || "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"} alt="cardDetailsPhoto"/>
                    </Paper>
                  ))
                }
            </div>
        </div>
      )}
    </Paper>
  );
};

export default PostDetails;