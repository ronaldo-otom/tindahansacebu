import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarDesign from "./app/designs/header/navbar.design";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import HomePage from "./app/pages/HomePage";
import "./App.css";
// import {SideNavDesign} from "./app/designs/body/sideNav.design";
import { Typography, Grid, Paper, Box, Button } from "@material-ui/core";
import { InputBtnRight } from "./app/designs/body/inputGroup.design";
import {categories} from './app/api/sidenavCategory.api'
import ViewProduct from "./app/pages/ViewProduct";
import Form from 'react-bootstrap/Form'
import FooterDesign from "./app/designs/footer/footer.design";
import {places} from './app/api/cebuPlaces.api';
import StorefrontIcon from '@material-ui/icons/Storefront';
import Category from "./app/pages/Category";
import SideNavContainer from "./app/redux/containers/body/sideNavContainer";
import StoreProfile from "./app/pages/StoreProfile";

function App() {
  const [view, setView] = React.useState('categories')
  const viewby = () => {
    if(view === 'categories') {
      return (
          <div style={{overflow: 'hidden'}}>
             
           {
              categories.map((category, index) =>
              <SideNavContainer key={index}
              subheaderText={category.subheaderText}
              categoryName={category.categoryName}
              categoryIcon={category.categoryIcon}
              subCategory1={category.subCategory1} 
              subCategoryIcon1={category.subCategoryIcon1} 
              subCategory2={category.subCategory2} 
              subCategoryIcon2={category.subCategoryIcon2} 
              subCategory3={category.subCategory3} 
              subCategoryIcon3={category.subCategoryIcon3} 
              subCategory4={category.subCategory4} 
              subCategoryIcon4={category.subCategoryIcon4} 
              subCategory5={category.subCategory5} 
              subCategoryIcon5={category.subCategoryIcon5} 
              subCategory6={category.subCategory6} 
              subCategoryIcon6={category.subCategoryIcon6}
              subCategory7={category.subCategory7} 
              subCategoryIcon7={category.subCategoryIcon7} 
              subCategory8={category.subCategory8} 
              subCategoryIcon8={category.subCategoryIcon8} 
              subCategory9={category.subCategory9} 
              subCategoryIcon9={category.subCategoryIcon9} 
              subCategory10={category.subCategory10} 
              subCategoryIcon10={category.subCategoryIcon10} 
              />) 
           }        
          </div>
      )
    }else if(view === 'stores'){
      return (
        <div className='sideNav' style={{marginLeft: '10px',marginRight: '10px'}}>
         <Form.Group controlId="exampleForm.SelectCustom">
          <Form.Label>Choose Location</Form.Label>
          <Form.Control as="select" onChange={(e) => alert(e.target.value)} custom>
            {places.map(place => 
            <option value={place}>{place}</option>
            )}
          </Form.Control>
         
        </Form.Group>
        </div>
      )
    }
  }

  return (
    <React.Fragment>      
      <Router>
        <NavbarDesign />  
        <Grid container spacing={1} justify="space-evenly">
          <Grid item  xs={12} sm={12} md={10} lg={3}>
            <div className='sideNav'>
            <Form.Group style={{marginLeft: '10px', marginRight: '10px'}}>
            <Form.Control as="select" size="sm" custom onChange={(e) => setView(e.target.value)}>
              <option value='categories'>View by Categories</option>
              <option value='stores'>View Stores by Location</option>             
            </Form.Control>
          </Form.Group>
            {viewby()}
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={10} lg={9}>
            <Grid container>             
              <Route path="/" exact component={HomePage} />
              <Route path="/viewproduct/:id"  component={ViewProduct} />
              <Route path="/category/:name"  component={Category} />
              <Route path="/store/:storeID/:storename"  component={StoreProfile} />
            </Grid>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item  xs={12} sm={12} md={12} lg={12} xl={12}>
            <FooterDesign />
          </Grid>
        </Grid>
      </Router>
    </React.Fragment>
  );
}

export default App;
