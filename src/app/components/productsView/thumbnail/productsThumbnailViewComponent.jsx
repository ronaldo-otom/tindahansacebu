import { Grid, Box } from "@material-ui/core";
import React from "react";
import CardDesign from "..//../../designs/body/card.design";
import boxLoading from "../../../images/boxLoading.gif";

function ProductsThumbnailViewComponent(props) {
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
    <div>
      {items.length === 0 ? (
        <Grid container spacing={2}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item, index) => (
            <Grid item={true} xs={6} sm={4} md={3} lg={3} xl={2} key={index}>
              <img src={boxLoading} height="320px" width="230px" />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Grid container spacing={2}>
          {items.map((item, index) => (
            <Grid
              item={true}
              xs={6}
              sm={6}
              md={4}
              lg={3}
              xl={2}
              key={index}
              style={{ marginTop: "1%" }}
            >
              <Box display="flex" justifyContent="center" marginLeft='15px' marginRight='15px'>
                <CardDesign items={item}name='homeThumbnail' stores={stores[index]}/>
              </Box>
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
}

export default ProductsThumbnailViewComponent;
