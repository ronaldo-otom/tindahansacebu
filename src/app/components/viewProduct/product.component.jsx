import { Box, Card, CardHeader, Grid } from "@material-ui/core";
import React from "react";
import DialogDesign from "../../designs/body/dialog.design";
import ProductViewDesign from "../../designs/body/productView.design";

export default function ProductComponent(props) {
  return (
    <div>
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <ProductViewDesign props={props}/>
        </Grid>
      </Grid>
    </div>
  );
}
