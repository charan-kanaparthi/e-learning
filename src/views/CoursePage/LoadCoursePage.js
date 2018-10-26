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
import CourseSidebarPage from './CourseSidebar'
const dashboardRoutes = [];
function Transition(props) {
  return <Slide direction="down" {...props} />;
}

class LoadCoursePage extends React.Component {
    constructor(props) {
        super(props);
        console.log(props.history.location)
    // this.state={videos: [
    //      'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4',
    //     'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-slow.mp4',
    //    'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-cute.mp4',
    //   'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-eek.mp4'
    // ]}
    this.state = {
      modal: false
    };
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
 
  
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header
          color="transparent"
          routes={dashboardRoutes}
          brand="Material Kit React"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 400,
            color: "white"
          }}
          {...rest}
        />
        <Parallax filter  style={{height:"10vh"}}>
       
        </Parallax>
 

        <div className="course">
		<Container>
			<Row>
				<Col sm="12" md="8">
					
					<div className="course_container" >
						<div className="course_title">Data Scientist</div>
                  <div className="course_image"> <video  src="https://adhyagroup.tech/wp-content/uploads/2018/09/Data-Scientist.mp4#t=" autoplay="" loop="" controlslist="nodownload"></video>
              {
                //    <img src={require("assets/images/course_4.jpg")} alt=""/>
            }
                  </div>

                        <div >
                        <CustomTabs
                          headerColor="primary"
                          tabs={[
                            {
                              tabName: "Description",
                              tabIcon: Face,
                              tabContent: (
                                <p className={classes.textCenter}>
                                A Data Scientist that will helps to  discover the information hidden in vast amounts of data,
                                 and helps to make smarter decisions to deliver even better products.
                                  The primary focus will be in applying data mining techniques, 
                                  doing statistical analysis, and building high quality prediction systems .
                                </p>
                              )
                            },
                            {
                              tabName: "Curriculum",
                              tabIcon: Chat,
                              tabContent: (<div>
                                <h3>What You'll Learn:</h3>
                                <p className={classes.textCenter}>
                                How to load and clean real-world data <br/>
                                How to make reliable statistical inferences from noisy data<br/>
                                How to use machine learning to learn models for data<br/>
                                How to visualize complex data<br/>
                                How to use Apache Spark to analyze data that does not fit within the memory of a single computer
                                </p>
                                <Collapsible trigger="Introduction &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; 1 lecture    &nbsp; &nbsp; &nbsp;      07:23   ">
                                  <CourseListItem  demo={true }title={"Introduction to Data Science"} preview={"preview"} videoUrl="https://udemy-assets-on-demand.udemy.com/2018-10-06_07-20-44-08fd8f5b61fbc6d7522fa11065ca75f2/WebHD_720p.mp4?nva=20181026160547&token=090344cef7dd6cd5b0977" summary={"07:23"}/>
                               </Collapsible>
                               <Collapsible trigger="Calculating Mode &nbsp; &nbsp; 2 lectures    &nbsp; &nbsp; &nbsp;      19:03     ">
                                  <CourseListItem  demo={true }title={"Calculating Mode"} preview={"preview"} videoUrl="https://udemy-assets-on-demand2.udemy.com/2018-10-06_07-21-19-8bbc02c3ac3cdf5ed3e6197fc9bd2b6f/WebHD_720p.mp4?nva=20181026183301&token=026b77229714ec45aebe7" summary={"08:25"}/>
                                  <CourseListItem  demo={true }title={"Histogram Calculation"} preview={"preview"} videoUrl="https://udemy-assets-on-demand2.udemy.com/2018-10-06_07-22-57-49a66e38e35201357eab0b4aac0c8554/WebHD_720p.mp4?nva=20181026183403&token=0f06133c1b712d3d4eed7" summary={"11:25"}/>
                               </Collapsible>  
                               <Collapsible trigger="Basic Techniques &nbsp; &nbsp; &nbsp;3 lectures    &nbsp; &nbsp; &nbsp;      30:00     ">
                                  <CourseListItem  demo={false} title={"Basic Reveration Techniques"} preview={"preview"} videoUrl="https://udemy-assets-on-demand.udemy.com/2018-10-06_07-20-44-08fd8f5b61fbc6d7522fa11065ca75f2/WebHD_720p.mp4?nva=20181026160547&token=090344cef7dd6cd5b0977" summary={"11:23"}/>
                                  <CourseListItem  demo={false} title={"Using Numphy Techniques"} preview={"preview"} videoUrl="https://udemy-assets-on-demand.udemy.com/2018-10-06_07-20-44-08fd8f5b61fbc6d7522fa11065ca75f2/WebHD_720p.mp4?nva=20181026160547&token=090344cef7dd6cd5b0977" summary={"09:25"}/>
                                  <CourseListItem  demo={false} title={"Summation of Elements"} preview={"preview"} videoUrl="https://udemy-assets-on-demand.udemy.com/2018-10-06_07-20-44-08fd8f5b61fbc6d7522fa11065ca75f2/WebHD_720p.mp4?nva=20181026160547&token=090344cef7dd6cd5b0977" summary={"10:25"}/>                                                                                         
                               </Collapsible>                        
                            </div>
                              )
                            },
                            {
                              tabName: "Reviews",
                              tabIcon: Build,
                              tabContent: (
                                <p className={classes.textCenter}>
                                  think that’s a responsibility that I have, to push
                                  possibilities, to show people, this is the level that
                                  things could be at. So when you get something that has
                                  the name Kanye West on it, it’s supposed to be pushing
                                  the furthest possibilities. I will be the leader of a
                                  company that ends up being worth billions of dollars,
                                  because I got the answers. I understand culture. I am
                                  the nucleus.
                                </p>
                              )
                            }
                          ]}
                        />
                      </div>
					
          </div>
          </Col>    
          <Col sm="12" md="4">
             <CourseSidebarPage/>
          </Col>
      </Row>

    </Container>
  
  </div>

        <Footer />
      </div>
    );
  }
}

export default withStyles(modalStyle)(LoadCoursePage);
