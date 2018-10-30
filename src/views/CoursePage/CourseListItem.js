import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import "../../../node_modules/video-react/dist/video-react.css";
// @material-ui/icons
import "./loadcourse.css"
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
 import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx";
 import Card from "components/Card/Card.jsx";
 import CardBody from "components/Card/CardBody.jsx";
 import CardHeader from "components/Card/CardHeader.jsx";
 import image1 from "assets/images/course_4.jpg";
 import image2 from "assets/images/course_5.jpg";
 import { Container, Row, Col } from 'reactstrap';
 import Face from "@material-ui/icons/Face";
import Chat from "@material-ui/icons/Chat";
import Build from "@material-ui/icons/Build";
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
// @material-ui/icons
import Close from "@material-ui/icons/Close";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import modalStyle from "assets/jss/material-kit-react/modalStyle.jsx";
import javascriptStyles from "assets/jss/material-kit-react/views/componentsSections/javascriptStyles.jsx";

// core components
import CustomTabs from "components/CustomTabs/CustomTabs.jsx";
//  import Button from "components/CustomButtons/Button.jsx";
// import "node_modules/video-react/dist/video-react.css";
import { Player } from 'video-react';
import Collapsible from 'react-collapsible';
import { ListGroup, ListGroupItem } from 'reactstrap';
import dataManager from"../helpers/datamanager"
const dashboardRoutes = [];
function Transition(props) {
  return <Slide direction="down" {...props} />;
}


class CourseListItem extends React.Component {
    constructor(props) {
        super(props);
       this.state = {
          modal: false,
          islogin:dataManager.isLoggedIn(),
          isDemo:this.props.isDemo,
          isPaid:false,
          courseTitle:this.props.courseTitle
         };
    this.handleClickOpen=this.handleClickOpen.bind(this);
    this.handleClose=this.handleClose.bind(this);
    this.handleClickCheck=this.handleClickCheck.bind(this);
         
  }
  handleClickOpen(modal) {
    var x = [];
    x[modal] = true;
    this.setState(x);
  }
  handleClose(modal) {
    var x = [];
    x[modal] = false;
    this.setState(x);
  }
  handleClickCheck(){
    if (this.state.islogin){
      console.log("logged in")
    }
    else{
      console.log("notlogged in")
    }
  }
  componentWillMount(){
    if(this.state.islogin){
     var uInfo= dataManager.getUserInfo()      
     if(this.state.courseTitle==uInfo.data.courses){
       console.log("paid")
     }
    }
 
  }
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div> { this.state.isDemo ?
            <div className="lecture-container  lecture-container--preview" data-purpose="lecture-item-1-1">
                    <div className="left-content">
                        <span className="udi udi-play-circle">
                        <i className="material-icons">play_circle_filled</i>
                        </span>
                            <div className="top">
                                <div className="title">
                                            <a onClick={() => this.handleClickOpen("classicModal")} href="javascript:void(0)" data-template-url="/1950898/preview/?startPreviewId=14615496" data-course-id="1950898" data-lecture-id="12042972" course-impression-tracker="" data-additional-className="generic-modal--previews-video" data-tracking-type="lecture-preview">
                                                { this.props.title}
                                        </a>
                                </div>
                            </div>
                    </div>
                    <div className="details">
                        <a onClick={() => this.handleClickOpen("classicModal")} href="javascript:void(0)" data-template-url="/1950898/preview/?startPreviewId=14615496" data-course-id="1950898" data-lecture-id="12042972" course-impression-tracker="" data-additional-className="generic-modal--previews-video" data-tracking-type="lecture-preview" data-purpose="preview-course">
                                            <span className="preview-text">{this.props.preview}</span>
                        </a>    
                            <span className="content-summary">
                                {this.props.summary}
                            </span>
                    </div>
            </div>:
             <div className="lecture-container  lecture-container--preview" data-purpose="lecture-item-1-1">
            <div className="left-content">
                <span className="udi udi-play-circle">
               { } <i className="material-icons">https </i>
                </span>
                    <div className="top">
                        <div className="title">
                                    <a onClick={() => this.handleClickCheck()} href="javascript:void(0)" data-template-url="/1950898/preview/?startPreviewId=14615496" data-course-id="1950898" data-lecture-id="12042972" course-impression-tracker="" data-additional-className="generic-modal--previews-video" data-tracking-type="lecture-preview">
                                        { this.props.title}
                                    </a>
                        </div>
                    </div>
            </div>
            <div className="details">
                <a onClick={() => this.handleClickCheck()} href="javascript:void(0)" data-template-url="/1950898/preview/?startPreviewId=14615496" data-course-id="1950898" data-lecture-id="12042972" course-impression-tracker="" data-additional-className="generic-modal--previews-video" data-tracking-type="lecture-preview" data-purpose="preview-course">
                                    <span className="preview-text">{this.props.preview}</span>
                </a>    
                    <span className="content-summary">
                        {this.props.summary}
                    </span>
            </div>
              </div>
            
        
        }

   <div>
     <Dialog
             classes={{
                      root: classes.center,
                      paper: classes.modal
                    }}
                    open={this.state.classicModal}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={() => this.handleClose("classicModal")}
                    aria-labelledby="classic-modal-slide-title"
                    aria-describedby="classic-modal-slide-description"
                  >
                    <DialogTitle
                      id="classic-modal-slide-title"
                      disableTypography
                      className={classes.modalHeader}
                    >
                      <IconButton
                        className={classes.modalCloseButton}
                        key="close"
                        aria-label="Close"
                        color="inherit"
                        onClick={() => this.handleClose("classicModal")}
                      >
                        <Close className={classes.modalClose} />
                      </IconButton>
          
                    </DialogTitle>
                    <DialogContent
                      id="classic-modal-slide-description"
                      className={classes.modalBody}
                    >
                    <Player
                         playsInline
                         poster="/assets/poster.png"
                         src={this.props.videoUrl}
                       /> 
                    </DialogContent>
                    <DialogActions className={classes.modalFooter}>
                     
                    </DialogActions>
                  </Dialog>
        </div>
   </div>
    );
  }

}
export default withStyles(modalStyle)(CourseListItem);
