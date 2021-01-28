import { Box, Grid, Typography } from "@material-ui/core";
import React from "react";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

function CardListDesign(props) {
  return (
    
      <ListGroup className="productsListView">          
        <ListGroup.Item action>
        <Link to={`/viewproduct/${props.items.id}`} className='link'>
          <Grid container direction="row" spacing={2}>
            <Grid item xs={12} sm={12} md={12} lg={2}>
              <Box display="flex" justifyContent="center" padding='15' marginTop='2%'>
                <img src={props.items.image} height="85px" width='auto'/>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={9}>
              <Grid container direction="column">
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <Box display="flex-start" marginBottom='2%'>
                    <Typography style={{ fontSize: 13 }} variant='button'>
                      <strong>{props.items.title}</strong> | <span style={{color: 'blue',}}>₱ {props.items.price}</span>
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <Box display="flex" justifyContent="left" className='productViewDetails' overflow='hidden' marginBottom='2%' marginTop='2%'>
                    <Typography style={{ fontSize: 13 }}>
                      {props.items.description}
                    </Typography>
                  </Box>
                </Grid>
                <Grid item>
                  <Grid container direction="row" spacing={2}>
                    <Grid item>
                      <Typography style={{ fontSize: 13 }}>
                        <i className="fas fa-clock"></i> {props.items.timestamp}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography style={{ fontSize: 13 }}>
                      <i className="fas fa-store"></i>  {props.stores}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          </Link>
        </ListGroup.Item>
        
      </ListGroup>
  
  );
}
export default CardListDesign;
