import React from "react";
import { Box, Grid, Tooltip, Typography } from "@material-ui/core";
import SelectDesign from "../../designs/body/select.design";

import AppsIcon from "@material-ui/icons/Apps";
import ListIcon from "@material-ui/icons/List";
import { PaginationDesign } from "../../designs/body/pagination.design";
import CategoryThumbnailComponent from "./thumbnail/categoryThumbnailComponent";
import CategoryListViewComponent from "./listView/categoryListComponent";

const CategoryComponent = (props) => {
    const allproducts = [];
    const stores=[];
    props.data.data.map((product, index) =>  product.products.map(products => {
  
      if(String(products.subcategory) === String(props.data.props.match.params.name)) {
        allproducts.push(products)
        stores.push(product.store[0].name)
      }
    }))

    console.log(allproducts)
    console.log(stores)

  const [thumbnailView, setThumbnailView] = React.useState("");

  const setView = (view) => {
    if (view === "list") {
      setThumbnailView("list");
    } else {
      setThumbnailView("thumbnail");
    }
  };

  function viewItems() {
    if (thumbnailView === "list") {
      return <CategoryListViewComponent stores={stores} items={props} products={allproducts} subcategory={String(props.data.props.match.params.name)} />;
    } else {
      return <CategoryThumbnailComponent stores={stores} items={props} products={allproducts}  headingTitle="New Items Posted" subcategory={String(props.data.props.match.params.name)} />;
    }
  }

  return (
    <Grid container style={{ marginRight: "10px", marginLeft: "10px" }}>
      <Grid
        item
        xs={11}
        sm={11}
        md={11}
        lg={11}
        xl={11}
        className="categoryWireFrame"
      >
        <Typography variant="button">
          <strong>{props.data.props.match.params.name}</strong>
        </Typography>
      </Grid>
      <Grid item xs={1} sm={1} md={1} lg={1} xl={1}className="categoryWireFrame">
        <Box display='flex' justifyContent='right' marginLeft='-22px'>
        <span className="button">
          <Tooltip placement="top" title="View by thumbnail">
            <button onClick={() => setView("thumbnail")}>
              <AppsIcon />
            </button>
          </Tooltip>
          <Tooltip placement="top" title="View by List">
            <button onClick={() => setView("list")}>
              <ListIcon />
            </button>
          </Tooltip>
        </span>
        </Box>
      </Grid>
      <Grid item  xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}>
        {viewItems()}
      </Grid>

      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        className="wireFrameTransparent"
      >
        <Box
          display="flex"
          justifyContent="center"
          marginTop="2%"
          marginBottom="2%"
        >
          <PaginationDesign />
        </Box>
      </Grid>
    </Grid>
  );
};

export default CategoryComponent;
