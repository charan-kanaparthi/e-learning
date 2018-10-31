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
import CourseListItem from './CourseListItem.js'
const dashboardRoutes = [];

class CourseSidebarPage extends React.Component {
    constructor(props) {
        super(props);

   
 
  }
 
 
  
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
			<div className="sidebar" >	
						<div className="sidebar_section">
							<div className="sidebar_section_title">Course Feature</div>
							<div className="sidebar_feature">
								<div className="course_price">$180</div>

								<div className="feature_list">	
									<div className="feature d-flex flex-row align-items-center justify-content-start">
										<div className="feature_title"><i className="fa fa-clock-o" aria-hidden="true"></i><span>Duration:</span></div>
										<div className="feature_text ml-auto">41 hours </div>
									</div>	
								
									
									<div className="feature d-flex flex-row align-items-center justify-content-start">
										<div className="feature_title"><i className="fa fa-list-alt" aria-hidden="true"></i><span>Lectures:</span></div>
										<div className="feature_text ml-auto">Yes</div>
									</div>								
									<div className="feature d-flex flex-row align-items-center justify-content-start">
										<div className="feature_title"><i className="fa fa-users" aria-hidden="true"></i><span>Articles:</span></div>
										<div className="feature_text ml-auto">35</div>
									</div>
									{this.props.isPaid ?  "":  <Button onClick={this.handleSubmit} type="button" color="rose">Enroll</Button> } 
               
									
								</div>
							</div>
						</div>

				
						<div className="sidebar_section">
							<div className="sidebar_section_title">Teacher</div>
							<div className="sidebar_teacher">
								<div className="teacher_title_container d-flex flex-row align-items-center justify-content-start">
									<div className="teacher_image"><img src={require("assets/images/teacher.jpg")} alt=""/></div>
									<div className="teacher_title">
										<div className="teacher_name"><a href="#">Jacke Masito</a></div>
										<div className="teacher_position">Sr Data Scientist</div>
									</div>
								</div>
								<div className="teacher_meta_container">
					
									<div className="teacher_meta d-flex flex-row align-items-center justify-content-start">
										<div className="teacher_meta_title">Average Rating:</div>
										<div className="teacher_meta_text ml-auto"><span>4.7</span><i className="fa fa-star" aria-hidden="true"></i></div>
									</div>
									
									<div className="teacher_meta d-flex flex-row align-items-center justify-content-start">
										<div className="teacher_meta_title">Review:</div>
										<div className="teacher_meta_text ml-auto"><span>12k</span><i className="fa fa-comment" aria-hidden="true"></i></div>
									</div>
								
									<div className="teacher_meta d-flex flex-row align-items-center justify-content-start">
										<div className="teacher_meta_title">Quizzes:</div>
										<div className="teacher_meta_text ml-auto"><span>600</span><i className="fa fa-user" aria-hidden="true"></i></div>
									</div>
								</div>
								<div className="teacher_info">
									<p>I'm a Data Scientist at one of Scotland's leading software companies: Skyscanner. I've been teaching software online for over 5 years, and I founded Teclado to bring software development to everyone—my objective is for you to truly understand everything that goes on behind the scenes!</p>
								</div>
							</div>
						</div>

						
						<div className="sidebar_section">
							<div className="sidebar_section_title">Latest Courses</div>
							<div className="sidebar_latest">

								
								<div className="latest d-flex flex-row align-items-start justify-content-start">
									<div className="latest_image"><div><img src={require("assets/images/latest_1.jpg")} alt=""/></div></div>
									<div className="latest_content">
										<div className="latest_title"><a href="course.html">Deep Learning</a></div>
										<div className="latest_price">Free</div>
									</div>
								</div>

								
								<div className="latest d-flex flex-row align-items-start justify-content-start">
									<div className="latest_image"><div><img src={require("assets/images/latest_2.jpg")} alt=""/></div></div>
									<div className="latest_content">
										<div className="latest_title"><a href="course.html">Python</a></div>
										<div className="latest_price">$170</div>
									</div>
								</div>

								
								<div className="latest d-flex flex-row align-items-start justify-content-start">
									<div className="latest_image"><div><img src={require("assets/images/latest_3.jpg")} alt=""/></div></div>
									<div className="latest_content">
										<div className="latest_title"><a href="course.html">Artificial Intelligence</a></div>
										<div className="latest_price">$220</div>
									</div>
								</div>

							</div>
						</div>

					</div>
   
      </div>
    );
  }
}

export default withStyles(modalStyle)(CourseSidebarPage);
