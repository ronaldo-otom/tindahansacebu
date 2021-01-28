import React from "react";
import { Box, Grid, Tooltip, Typography } from "@material-ui/core";
import SelectDesign from "../../designs/body/select.design";

import AppsIcon from "@material-ui/icons/Apps";
import ListIcon from "@material-ui/icons/List";
import { PaginationDesign } from "../../designs/body/pagination.design";
import ProductsThumbnailViewContainer from "../../redux/containers/productsView/thumbnailView/productsThumbnailViewContainer";
import ProductsListViewContainer from "../../redux/containers/productsView/listView/productsListViewContainer";




const HomeComponent = () => {
  const [thumbnailView, setThumbnailView] = React.useState("");
  
  React.useState(() => {
    document.body.scrollTop = 0
  }, [])

  const setView = (view) => {
    if (view === "list") {
      setThumbnailView("list");
    }  else {
      setThumbnailView("thumbnail");
    }
  };

  function viewItems() {
    if (thumbnailView === "list") {
      return <ProductsListViewContainer />;
    } else if (thumbnailView === "items") {
      return <ProductsThumbnailViewContainer headingTitle="New Items Posted" />;
    } else {
      return <ProductsThumbnailViewContainer headingTitle="New Items Posted" />;
    }
  }

  return (
    <Grid container style={{marginRight: '10px', marginLeft: '10px', }}>
      <Grid item xs={11} sm={11} md={11} lg={11}  className="wireFrameTransparent">
        <Typography variant='button'><strong>All Items for Sale</strong></Typography>  
      </Grid>     
      <Grid item xs={1} sm={1} md={1} lg={1} className="wireFrameTransparent">
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
      </Grid>
      <Grid item lg={12}>
       
          {viewItems()}
       
      </Grid>
      
      <Grid item  xs={12} sm={12} md={12} lg={12} xl={12} className="wireFrameTransparent">
        <Box display="flex" justifyContent="center" marginTop='2%' marginBottom='2R%'>
          <PaginationDesign />
          </Box>
      </Grid>
    
    </Grid>
   
  );
};

export default HomeComponent;
