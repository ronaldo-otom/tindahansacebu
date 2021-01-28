import { Box, Grid, Typography } from "@material-ui/core";
import React from "react";
import ReviewComponent from "../review/reviewComponent";

const Gadgets = (props) => {
  const [product, setProduct] = React.useState(props.product[0]);
  console.log(props)
  return (
    <Box marginTop="2%">
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Box borderBottom="1px solid lightgray" padding="4px">
            <Grid container direction="row">
              <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                <Typography variant="caption">
                  <strong>Screen Size: </strong>
                </Typography>
              </Grid>
              <Grid item xs={8} sm={8} md={8} lg={8} xl={8}>
                <Typography variant="caption">{product.screensize}</Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Box borderBottom="1px solid lightgray" padding="4px">
            <Grid container direction="row">
              <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                <Typography variant="caption">
                  <strong>Processor: </strong>
                </Typography>
              </Grid>
              <Grid item xs={8} sm={8} md={8} lg={8} xl={8}>
                <Typography variant="caption">{product.cpu}</Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Box borderBottom="1px solid lightgray" padding="4px">
            <Grid container direction="row">
              <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                <Typography variant="caption">
                  <strong>Graphics: </strong>
                </Typography>
              </Grid>
              <Grid item xs={8} sm={8} md={8} lg={8} xl={8}>
                <Typography variant="caption">{product.gpu}</Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Box borderBottom="1px solid lightgray" padding="4px">
            <Grid container direction="row">
              <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                <Typography variant="caption">
                  <strong>Memory: </strong>
                </Typography>
              </Grid>
              <Grid item xs={8} sm={8} md={8} lg={8} xl={8}>
                <Typography variant="caption">{product.ram}</Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Box borderBottom="1px solid lightgray" padding="4px">
            <Grid container direction="row">
              <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                <Typography variant="caption">
                  <strong>Storage: </strong>
                </Typography>
              </Grid>
              <Grid item xs={8} sm={8} md={8} lg={8} xl={8}>
                <Typography variant="caption">{product.hdd}</Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Box borderBottom="1px solid lightgray" padding="4px">
            <Grid container direction="row">
              <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                <Typography variant="caption">
                  <strong>Operating System: </strong>
                </Typography>
              </Grid>
              <Grid item xs={8} sm={8} md={8} lg={8} xl={8}>
                <Typography variant="caption">{product.os}</Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Box borderBottom="1px solid lightgray" padding="4px">
            <Grid container direction="row">
              <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                <Typography variant="caption">
                  <strong>Battery Life: </strong>
                </Typography>
              </Grid>
              <Grid item xs={8} sm={8} md={8} lg={8} xl={8}>
                <Typography variant="caption">{product.battery}</Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
export function SpecificationComponent(props) {
  console.log(props)
  function Specification() {
    if (
      props.category === "Gadgets" &&
      (props.subCategory === "Laptop" || props.subCategory === "Mobile Phones")
    ) {
      return <Gadgets  product={props.specs.specs}  />;
    } else {
      return <Gadgets product={props.specs.specs} />;
    }
  }
  return (
        <div>
        {Specification()}
        <Grid container style={{marginTop: '7%'}}>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <ReviewComponent reviews={props.specs} />
        </Grid>
        </Grid>
        </div>
  )
}
