import { Divider, Grid, Box } from "@material-ui/core";
import React from "react";
import CardListDesign from "../../../designs/body/cardList.design";
import listLoading from "../../../images/listLoading.gif";

function CategoryListViewComponent(props) {
  console.log(props.products)
  return (
    <React.Fragment>
      {props.products.length === 0 ? (
        [1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
          <Grid container spacing={2} key={index}>
            <Grid item={true} lg={12} style={{ marginTop: "1%" }}>
              <Box display="flex" justifyContent="center">
                <img src={listLoading} height="150px" width="100%" />
              </Box>
            </Grid>
          </Grid>
        ))
      ) : (
        <Grid container spacing={2}>
          {props.products.map((item, index) => (
            <Grid item={true} md={12} lg={12} xl={12} key={index}>
              <Box display="flex" justifyContent="center" marginRight='25px'>
                <CardListDesign stores={props.stores[index]} items={item} name="homeList" />
              </Box>
            </Grid>
          ))}
        </Grid>
      )}
    </React.Fragment>
  );
}

export default CategoryListViewComponent;
