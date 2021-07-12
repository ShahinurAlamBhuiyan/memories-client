import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  media: {
    borderRadius: "20px",
    objectFit: "cover",
    maxWidth: "800px",
    height: "370px",
    maxHeight: "370px",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  card: {
    display: "flex",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      flexWrap: "wrap",
      flexDirection: "column",
    },
  },
  section: {
    borderRadius: "20px",
    margin: "10px",
    flex: 1,
  },
  imageSection: {
    marginLeft: "20px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
    },
  },
  recommendedPosts: {
    display: "flex",
    marginTop: "20px",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  loadingPaper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    borderRadius: "15px",
    height: "39vh",
  },
  commentsOuterContainer: {
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  commentsInnerContainer: {
    height: "200px",
    overflowY: "auto",
    marginRight: "30px",
    "&::-webkit-scrollbar": {
      width: "0.6em",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundImage: "linear-gradient(#bdc3c7, #2c3e50)",
      borderRadius: "40px",
    },
    [theme.breakpoints.down("sm")]: {
      marginRight: "0px"
    },
  },
  addComment:{
    width: "55%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      paddingTop: "20px"
    },
  }
}));