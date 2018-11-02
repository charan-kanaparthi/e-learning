import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import "../../../node_modules/video-react/dist/video-react.css";
// @material-ui/icons
import "./coursePage.css"
import history from '../../index';
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
//  import Button from "components/CustomButtons/Button.jsx";
// import "node_modules/video-react/dist/video-react.css";
import { Player } from 'video-react';
import dataManager from"../helpers/datamanager"

const dashboardRoutes = [];

class CoursePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          islogin:dataManager.isLoggedIn(),
          isPaid:false,
          courseTitle:"Data Scientist"
         };
    this.handleSubmit=this.handleSubmit.bind(this)
    }
    
    handleSubmit(){
      history.push('/course',this.state);
    }
    componentWillMount(){

      if(this.state.islogin){
       var uInfo= dataManager.getUserInfo()      
       if(this.state.courseTitle==uInfo.data.courses){
         console.log("paid")
         this.setState({isPaid: true});
       }
      }
   
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
        <Parallax filter  style={{height:"30vh"}}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <h1 className={classes.title}>Our Courses</h1>
              
                <br />
            
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
          <br/>
      {
           
        //   <Card>
        //   <CardBody>
        //      <Player
        //      playsInline
        //      poster="/assets/poster.png"
        //      src={video_url}
        //    /> 
           
        //    </CardBody>
        //    </Card>
         // )
        //  <h4 key={video_url} className={ "in-active"} >
        //  { video_url}
        //   </h4>
      }
        <GridContainer>
        
        <GridItem xs={12} sm={12} md={6}>
        <Card>
        <img className={classes.imgCardTop} src={image1} alt="Card-img-cap" />
        <CardBody>
          <h4 className={classes.cardTitle}>Machine Learning</h4>
          <p>A Data Scientist Combines statistical and machine learning techniques with R and Python programming to analyze and interpret complex data
          </p>
          <p><small className={classes.textMuted}>Last updated 3 mins ago</small></p>
          {this.state.isPaid ?  <Button onClick={this.handleSubmit} type="button" color="rose">Go to Course</Button>:  <Button onClick={this.handleSubmit} type="button" color="rose">Enroll</Button> } 
               
         
        </CardBody>
      </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
        <Card>
        <img className={classes.imgCardTop} src={image2} alt="Card-img-cap" />
        <CardBody>
          <h4 className={classes.cardTitle}>Data Analyst</h4>
          <p>Data analysts translate numbers into plain English. Every business collects data, whether it's sales figures, market research or transportation costs.</p>
          <p><small className={classes.textMuted}>Last updated 3 mins ago</small></p>
          <Button onClick={this.handleSubmit} type="button" color="rose">Enroll</Button>
        </CardBody>
      </Card>
        </GridItem>
            </GridContainer>
      
     
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(landingPageStyle)(CoursePage);
