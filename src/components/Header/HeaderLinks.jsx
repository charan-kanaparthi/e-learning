/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import Button from "components/CustomButtons/Button.jsx";

import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";
import dataManager from '../../views/helpers/datamanager'
function HeaderLinks({ ...props }) {
  const { classes } = props;
  var islogin=dataManager.isLoggedIn()

// console.log(prop)
  return (
    <List className={classes.list}>
      {/* <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Components"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link to="/" className={classes.dropdownLink}>
              All components
            </Link>
          
          ]}
        />
      </ListItem> */}

      

      <ListItem className={classes.listItem}>
            <Link to="/home" className={classes.navLink}>
             Home
            </Link>  
      </ListItem>
      <ListItem className={classes.listItem}> 
      <Link to="/courses" className={classes.navLink}>
          Courses
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}> 
      <Link to="/Contact" className={classes.navLink}>
       Contact
        </Link>
      </ListItem>
      {islogin ?
          <ListItem className={classes.listItem}>   
          <Link to="" className={classes.navLink}>    {sessionStorage.getItem("token").split("\"")[1]}
           </Link>  
         </ListItem>:
          <ListItem className={classes.listItem}>
         <Link to="/login" className={classes.navLink}>   Login
          </Link>      
        </ListItem>
       }
      {  islogin ?
        <ListItem className={classes.listItem}>
         <Link onClick={ dataManager.logOut} to="/login" className={classes.navLink}>  
           Logout
          </Link>
        </ListItem>:
        <ListItem className={classes.listItem}>
        <Link to="" className={classes.navLink}>  
        Register
         </Link>
       </ListItem>
      }
  
      {/* <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-twitter"
          title="Follow us on twitter"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
        
            color="transparent"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-twitter"} />
          </Button>
        </Tooltip>
      </ListItem> */}
    
    </List>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
