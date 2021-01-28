import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import ProductViewDesign from "./productView.design";
import { Box, Divider, Grid, Typography } from "@material-ui/core";

export default function DialogDesign(props) {
  
  const id = props.id;
  const allproducts = [];
  let getproduct = [];
  const [product, setProducts] = React.useState(getproduct)
  const [open, setOpen] = React.useState(false);
  
  function allProducts () {
    props.data.data.map(product => allproducts.push(product.products))
  }; allProducts ();

  function getProduct() {
    allproducts.map(item => {
      if(item.length >= 2) {
        item.map(items =>  getproduct.push(items))
      }else {
        getproduct.push(item[0])
      }
    })
  };getProduct();
  
  console.log(getproduct)
  React.useState(() => {
    product.map(item => {
      if(String(item.id) === String(id)) {
        setProducts(item)
      }
    })
  }, []);

  
  console.log(product)
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  // console.log(product.title)
  return (
    <div>
      <ProductViewDesign props={product} openDialog={handleClickOpen} />
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <Box display="flex">
            {product.title} | <span style={{ color: "blue" }}> ₱ {product.price}</span>
          </Box>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <img src={product.image} height="300px" />
          </DialogContentText>
        </DialogContent>
        <Divider style={{marginTop: '1%', marginBottom: '1%'}} />
        <Grid container direction='row' justify='space-evenly'>
          <Grid item xs={2}>
            <Box display="flex" justifyContent="center">
              <img
                src={product.image}
                height="50px"
                className="thumbnailImages"
              />
            </Box>
          </Grid>
          <Grid item xs={2}>
            <Box display="flex" justifyContent="center">
              <img
                src={product.image}
                height="50px"
                className="thumbnailImages"
              />
            </Box>
          </Grid>
          <Grid item xs={2}>
            <Box display="flex" justifyContent="center">
              <img
                src={product.image}
                height="50px"
                className="thumbnailImages"
              />
            </Box>
          </Grid>
          <Grid item xs={2}>
            <Box display="flex" justifyContent="center">
              <img
                src={product.image}
                height="50px"
                className="thumbnailImages"
              />
            </Box>
          </Grid>
        </Grid>
        <Divider style={{marginTop: '1%', marginBottom: '1%'}} />
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
