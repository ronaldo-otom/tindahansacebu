import { Box, Button, Grid, Typography } from "@material-ui/core";
import React from "react";
import { SpecificationComponent } from "../../components/specifications/specificationsComponent";
export default function ProductViewDesign(props) {
  const [product, setProduct] = React.useState(props.props);

  console.log(product)
  console.log(props)
  return (
    <Grid container>
      <Grid item xs={5} sm={5} md={5} lg={5} xl={5}>
        <Grid container direction='row' justify='space-evenly' >
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Box
              display="flex"
              justifyContent="center"
              maxHeight="20%"
              padding="7%"
            >
              <img
                src={product.image}
                width="100%"
                height="20%"
                onClick={props.openDialog}
                style={{ cursor: "pointer" }}
              />
            </Box>
          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Grid container spacing={1}>
              <Grid item xs={4} sm={3} md={3} lg={3} xl={3}>
                <Box display="flex" justifyContent="center">
                  <img
                    src={product.image}
                    width="auto"
                    height="40px"
                    onClick={props.openDialog}
                    className='thumbnailImages'
                  />
                </Box>
              </Grid>
              <Grid item xs={4} sm={3} md={3} lg={3} xl={3}>
                <Box display="flex" justifyContent="center">
                  <img
                    src={product.image}
                    width="auto"
                    height="40px"
                    onClick={props.openDialog}
                    className='thumbnailImages'
                  />
                </Box>
              </Grid>
              <Grid item xs={4} sm={3} md={3} lg={3} xl={3}>
                <Box display="flex" justifyContent="center">
                  <img
                    src={product.image}
                    width="auto"
                    height="40px"
                    onClick={props.openDialog}
                    className='thumbnailImages'
                  />
                </Box>
              </Grid>
              <Grid item xs={4} sm={3} md={3} lg={3} xl={3}>
                <Box display="flex" justifyContent="center">
                  <img
                    src={product.image}
                    width="auto"
                    height="40px"
                    onClick={props.openDialog}
                    className='thumbnailImages'
                  />
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={7} sm={7} md={7} lg={7} xl={7}>
        <Box padding="10%">
          <Grid container direction="column">
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <Typography variant="h5">{product.title}</Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <Typography variant="button">₱ {product.price}</Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
              style={{ marginTop: "5%" }}
            >
              <Grid container direction="column">
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <Typography variant="inherit">
                    <strong>Details:</strong>
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <Box>
                    <Typography variant="caption">
                      {product.description}
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Box padding="7px" marginLeft="32px" marginRight="32px" marginTop='4%'>
          <Typography variant="button">
            <strong>Specifications:</strong>
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={11} xl={11}>
        <Box marginLeft="50px" marginRight="20px">
          <SpecificationComponent specs={product}/>
        </Box>
      </Grid>
    </Grid>
  );
}
