import React, { useRef, useState } from "react";
import { Typography, TextField, Button } from "@material-ui/core";
import useStyles from "./styles";
import { useDispatch } from "react-redux";
import { commentPost } from "../../actions/posts";
const CommentSection = ({ post }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const commentsRef = useRef();
  const [comments, setComments] = useState(post?.comments);
  const [comment, setComment] = useState("");
  const user = JSON.parse(localStorage.getItem("profile"));
  const handleClick = async () => {
    const finalComment = `${user.result.name} : ${comment}`;
    const newComments = await dispatch(commentPost(finalComment, post._id));
    setComments(newComments);
    setComment("");

    commentsRef.current.scrollIntoView({ behavior: "smooth" });
  };
  console.log(user);
  return (
    <div>
       <Typography color="primary" gutterBottom variant="h6">
            <strong>Comments :</strong>
          </Typography>
      <div className={classes.commentsOuterContainer}>
        <div className={classes.commentsInnerContainer}>
          {comments.length > 0
            ? comments.map((c, i) => (
                <Typography style={{marginRight:"20px"}} key={i} gutterBottom variant="subtitle1">
                  <strong>{c.split(": ")[0]}</strong>
                  {c.split(": ")[1]}
                </Typography>
              ))
            : <p>Ops! No one has commented yet</p> }
          <div ref={commentsRef} />
        </div>
        {user?.result?.name && (
          <div className={classes.addComment}>
            <Typography gutterBottom variant="h6">
              Write a Comment
            </Typography>
            <TextField
              fullWidth
              row={4}
              variant="outlined"
              label="Comment"
              multiline
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <Button
              style={{ marginTop: "10px" }}
              fullWidth
              disabled={!comment}
              variant="contained"
              color="primary"
              onClick={handleClick}
            >
              Comment
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CommentSection;
