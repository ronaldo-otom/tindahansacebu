import React from 'react'
import { Box, Grid, Tooltip } from "@material-ui/core";
import boxLoading from "../../../images/boxLoading.gif";
import AppsIcon from "@material-ui/icons/Apps";
import ListIcon from "@material-ui/icons/List";
import CardDesign from '../../../designs/body/card.design';


function CategoryThumbnailComponent(props) {

  const [products, setProducts] = React.useState([]);
  const [stores, setStores] = React.useState([]);


  React.useEffect(() => {
    props.items.data.data.map((item, index) =>{
      setProducts(prevState => [...prevState, item.products])
    
      if(item.products.length >= 2) {
        item.products.map(items => {
          setStores(prevState => [...prevState, item.store[0].name])
        })
      }else {
        setStores(prevState => [...prevState, item.store[0].name])

      }

    })
  }, [])

    return (
      <div>
      {props.products.length === 0 ? (
        <Grid container spacing={2}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item, index) => (
            <Grid item={true} xs={6} sm={4} md={3} lg={3} xl={2} key={index}>
              <img src={boxLoading} height="320px" width="230px" />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Grid container spacing={2}>
          {props.products.map((item, index) => (
            <Grid
              item={true}
              xs={6}
              sm={4}
              md={3}
              lg={3}
              xl={2}
              key={index}
              style={{ marginTop: "1%" }}
            >
              <Box display="flex" justifyContent="center">
                <CardDesign stores={props.stores[index]} index={index} allproducts={item} subcategory={item.subcategory} subcat={props.subcategory} />
              </Box>
            </Grid>
          ))}
        </Grid>
      )}
    </div>
    )
}

export default CategoryThumbnailComponent