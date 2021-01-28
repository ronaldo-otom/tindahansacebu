import {
  Box,
  Button,
  CardMedia,
  Divider,
  Grid,
  IconButton,
  Paper,
  Typography,
} from "@material-ui/core";
import React from "react";
import DialogDesign from "../../designs/body/dialog.design";
import StoreComponent from "../storeComponent/storeinProductView/store.component";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import { Link } from "react-router-dom";

function ViewProductComponent(props) {
  const id = props.data.params.match.params.id;
  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={12} lg={1} xl={1}>
        <Box display="flex" justifyContent="center">
          <Link to="/">
            <IconButton color="primary">
              <KeyboardBackspaceIcon />
            </IconButton>
          </Link>
        </Box>
      </Grid>
      <Grid item lg={8}>
        <DialogDesign data={props.data.data} id={id} />
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={3} xl={3}>
        <Paper elevation={1}>
          <StoreComponent data={props.data.data} id={id} />
        </Paper>
      </Grid>
    </Grid>
  );
}

export default ViewProductComponent;
