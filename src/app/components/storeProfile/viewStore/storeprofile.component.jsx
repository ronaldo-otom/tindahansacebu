import { Box, Divider, Grid, Typography } from "@material-ui/core";
import React from "react";

function StoreProfileComponent(props) {
  console.log(props);
  const storeID = props.data.storeID;
  const storeName = props.data.storename;
  const [storeProfile, setStoreProfile] = React.useState({});
  const [allProducts, setAllProducts] = React.useState([]);

  React.useEffect(() => {
    props.data.data.map((items) => {
      if (String(items.id) === String(storeID)) {
        setStoreProfile(items.store[0]);
        console.log(items.products);
        setAllProducts((prevState) => [...prevState, items.products]);
      }
    });
  }, []);

  console.log(storeProfile.name);
  console.log(allProducts);
  return (
    <Grid container direction="row" style={{ width: '950px', padding: '1%'}} className='wireFrame'>
        <Box display='flex' justifyContent='left'>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12} >
        
          <img src={storeProfile.img} className="storeprofileImage" />
       
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Typography>{storeProfile.name}</Typography>
      </Grid>
      </Box>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Divider />
      </Grid>
    </Grid>
  );
}

export default StoreProfileComponent;
