import React from "react";
import { makeStyles, Grid, Select } from "@material-ui/core";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { StickyContainer, Sticky } from "react-sticky";
import Form from 'react-bootstrap/Form'
import { Link } from "react-router-dom";
import {store} from '../../redux/store'

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export function SideNavDesign(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  function subCategory(category, icon) {
    if (category !== "") {
      return (
        <Link to={`/category/${category}`} className='link' onClick={handleClick}>
        <ListItem button className={classes.nested}>
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText primary={category} />
        </ListItem>
        </Link>
      );
    } else if (category === null || icon === null) {
      return null;
    }
  }

  return (
    <div className='sideNav'>
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <ListItem button onClick={handleClick}>
            <ListItemIcon>{props.data.categoryIcon}</ListItemIcon>
            <ListItemText primary={props.data.categoryName} />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
           
              {subCategory(props.data.subCategory1, props.data.subCategoryIcon1)}
              {subCategory(props.data.subCategory2, props.data.subCategoryIcon2)}
              {subCategory(props.data.subCategory3, props.data.subCategoryIcon3)}
              {subCategory(props.data.subCategory4, props.data.subCategoryIcon4)}
              {subCategory(props.data.subCategory5, props.data.subCategoryIcon5)}
              {subCategory(props.data.subCategory6, props.data.subCategoryIcon6)}
              {subCategory(props.data.subCategory7, props.data.subCategoryIcon7)}
              {subCategory(props.data.subCategory8, props.data.subCategoryIcon8)}
              {subCategory(props.data.subCategory9, props.data.subCategoryIcon9)}
              {subCategory(props.data.subCategory10, props.data.subCategoryIcon10)}
            </List>
          </Collapse>
        </Grid>
      </Grid>
    </div>
  );
}