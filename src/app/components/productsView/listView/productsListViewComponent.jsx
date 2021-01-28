import { Divider, Grid, Box } from "@material-ui/core";
import React from "react";
import CardListDesign from "../../../designs/body/cardList.design";
import listLoading from "../../../images/listLoading.gif";

function ProductsListViewComponent(props) {
  const [products, setProducts] = React.useState([]);
  const [stores, setStores] = React.useState([]);

  const items = [];
  let storeIndex = 0;

  React.useEffect(() => {
    props.data.products.map((item, index) =>{
      setProducts(prevState => [...prevState, item.products])
      
      if(item.products.length >= 2) {
        item.products.map(items => {
          setStores(prevState => [...prevState, item.store[0].name])
        })
      }else {
        setStores(prevState => [...prevState, item.store[0].name])
        console.log(item.products.length, index)
      }

    })
  }, [])
  
  function getItems() {
    products.map(item => item.map(products => items.push(products)))
  };getItems()
  console.log(stores)

  return (
    <React.Fragment>
      {items.length === 0 ? (
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
          {items.map((item, index) => (
            <Grid item={true} md={12} lg={12} xl={12} key={index}>
              <Box display="flex" justifyContent="center">
                <CardListDesign stores={stores[index]} items={item} name="homeList" />
              </Box>
            </Grid>
          ))}
        </Grid>
      )}
    </React.Fragment>
  );
}

export default ProductsListViewComponent;
