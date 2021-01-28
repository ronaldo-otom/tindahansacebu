import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  Typography,
  makeStyles,
  IconButton,
  Box,
  Button,
  Divider,
  Paper,
} from "@material-ui/core";
import React from "react";
import Form from "react-bootstrap/Form";
import { red } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  avatar: {
    backgroundColor: red[500],
    width: theme.spacing(3),
    height: theme.spacing(3),
    fontSize: 12,
  },
}));

function ReviewComponent(props) {
  const classes = useStyles();
  const [viewReview, setViewReview] = React.useState(true);
  const [reviews, setReviews] = React.useState(props.reviews.specs[0].reviews);
  console.log(reviews)

  const setReview = () => {
      if(viewReview === false) {
        setViewReview(true)
      }else {
        setViewReview(false)
      }
  }
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Box display="flex" justifyContent="center">
          <Button
            variant="contained"
            color="primary"
            size="small"
            onClick={setReview}
          >
            Write a Review
          </Button>
        </Box>
      </Grid>
      {viewReview === true ? null : (
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>
              <strong>Write a Review</strong>
            </Form.Label>
            <Form.Control
              as="textarea"
              rows="3"
              style={{ minHeight: "80px" }}
            />
          </Form.Group>
          <Grid container spacing={1} direction="row">
            <Grid item>
              <Button variant="contained" color="primary" size="small">
                Submit Review
              </Button>
            </Grid>
            <Grid item>
              <Button variant="contained" color="secondary" size="small" onClick={setReview}>
                Cancel
              </Button>
            </Grid>
          </Grid>
        </Grid>
      )}
      
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Typography variant="button"><strong>Customer Reviews:</strong></Typography>
        <Divider />
        {reviews.length !== 0 ? reviews.map((review, index) =>
        <Paper elevation={1} style={{padding: '15px', marginTop: '2%'}} key={index}>
          <Box marginTop='1%'>
            <Typography variant="subtitle2"><strong>{review.user}</strong></Typography>
            <Typography variant="caption">{review.comment}</Typography>
            {review.rating === 4 ? <Typography><span style={{color: '#F7C905'}}>★ ★ ★ ★ </span>☆</Typography> : <Typography>☆ ☆ ☆ ☆ ☆</Typography>}
          </Box>
        </Paper>
        )
        :
        <Box marginTop='1%'>
          <Typography variant="inherit">No Reviews Yet</Typography>
        </Box>
        }
      </Grid>
    </Grid>
  );
}

export default ReviewComponent;
