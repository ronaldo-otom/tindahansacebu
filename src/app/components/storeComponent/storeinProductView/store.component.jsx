import {
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  Typography,
} from "@material-ui/core";
import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import RateReviewIcon from '@material-ui/icons/RateReview';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Link } from "react-router-dom";

const storePreference = [
  {
    icon: <ShoppingBasketIcon />,
    name: "All Products",
    link: ''
  },
  {
    icon: <ChatBubbleIcon />,
    name: "Message",
    link: ''
  },
  {
    icon: <RateReviewIcon />,
    name: "Reviews",
    link: ''
  },
  {
    icon: <LocationOnIcon />,
    name: "Location",
    link: ''
  }
];

function StoreComponent(props) {
   const id = props.id;
   const allitems = [];
   let getproduct = [];
   let storeIndex = 0;
   const [product, setProducts] = React.useState(getproduct)
  
   function allProducts () {
     props.data.data.map(items => allitems.push(items))
   }; allProducts ();
 
   function getProduct() {
    allitems.map((item, index) => {
      console.log(item)
       if(item.products.length >= 2) {
         item.products.map(items =>  {
           getproduct.push(items)
           if(items.id === id) {
            storeIndex = index
            console.log(items.id )
           }
         })
         
       }else {
       
         getproduct.push(item[0])
       
          item.products.map(items =>  {
            getproduct.push(items)
            console.log(items.id)
            if(items.id === id) {
             storeIndex = index
             console.log(items.id)
            }
          })
        
       }
     })
    
   };
   getProduct();
   console.log(allitems)
   const [store, setStore] = React.useState({});
  console.log(props.data.data[storeIndex])
  return (
    <div className="sideNav" style={{ padding: "15px", marginTop: '2%',}}>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Box display="flex" justifyContent="center" padding="15px">
            <Link to={`/store/${props.data.data[storeIndex].store[0].id}/${props.data.data[storeIndex].store[0].name}`} className='link'>
            <img
              src={props.data.data[storeIndex].store[0].img}
              className="storeProfileImage"
            />
            </Link>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Link to={'/store/'+props.data.data[storeIndex].store[0].name} className='link'>
          <Box display="flex" justifyContent="center">
            <Typography align="center" variant="caption">
              <strong>Location: </strong> {props.data.data[storeIndex].store[0].location}
            </Typography>
          </Box>
          <Box display="flex" justifyContent="center">
            <Typography align="center" variant="button" color='primary'>
              <strong>{props.data.data[storeIndex].store[0].name}</strong>
            </Typography>
          </Box>
          </Link>
        </Grid>
       
        {storePreference.map((storeDetails, index) => (
          <React.Fragment key={index}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <Divider />
            </Grid>
            <Button fullWidth variant="text" style={{ textAlign: "left" }}>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              {storeDetails.icon}
                <Typography
                  align="center"
                  variant="caption"
                  style={{ marginLeft: "15px" }}
                >
                  {storeDetails.name}
                </Typography>
              </Grid>
            </Button>
          </React.Fragment>
        ))}
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Divider />
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Box display="flex" justifyContent="center">
            <Typography
              align="center"
              variant="caption"
              style={{ marginLeft: "15px" }}
            >
              <i className="fas fa-mobile-alt"></i> {props.data.data[storeIndex].store[0].contactnumber}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Divider />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Box display="flex" justifyContent="center">
            <Typography variant="caption" align="center">
              Store Rating
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Box display="flex" justifyContent="center">
            <Typography variant="caption" align="center">
              <span style={{ color: "#F7C905", fontSize: "25px" }}>
                ★ ★ ★ ★
              </span>{" "}
              <span style={{ fontSize: "25px" }}> ☆</span>
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Divider />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Box display="flex" justifyContent="center">
            <Typography align="center" variant="caption">
              <IconButton color="primary">
                <FacebookIcon />
              </IconButton>{" "}
              |
              <IconButton color="primary">
                <TwitterIcon />
              </IconButton>{" "}
              |
              <IconButton color="secondary">
                <YouTubeIcon />
              </IconButton>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default StoreComponent;
