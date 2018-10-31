import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
// import username from "@material-ui/icons/username";
import People from "@material-ui/icons/People";
// core components
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import loginPageStyle from "assets/jss/material-kit-react/views/loginPage.jsx";
import image from "assets/img/bg7.jpg";
import history from '../../index';
import dataManager from '../helpers/datamanager';
import { Col, Form, FormGroup, Label, Input , FormText } from 'reactstrap';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    // we use this to make the card to appear after the page has been rendered
    this.state = {
      cardAnimaton: "cardHidden",username:"",password:"",validation:{username:false,password:false},submitted:false
    };
    localStorage.clear();
    sessionStorage.clear()
    
    this.handleChange=this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  }
  handleSubmit(){
    if(this.state.username ==''|| this.state.password =='' ){
      this.setState( (prevState)=> {
        prevState.submitted=true
    })
      return;
    }
    dataManager.checklogin({username:this.state.username,password:this.state.password},(res)=>{
      console.log(res)
      if(res.status){
        dataManager.setToken(res.data.token);
        dataManager.setUserInfo(res);
        history.push('/courses');
      }else{
        alert("failed")
      } 
      
    })

  }
  handleChange(event) {
    console.log(event.target.name)
    var type=event.target.name
    var value=event.target.value    
    if(type==='username'){
        this.setState({username: value});
        console.log(this.state.username)
      }
      if(type==='password'){
      this.setState({password: value});
      console.log(this.state.password)
    }     
    
    }
  componentDidMount() {
    // we add a hidden class to the card and after 700 ms we delete it and the transition appears
    setTimeout(
      function() {
        this.setState({ cardAnimaton: "" });
      }.bind(this),
      700
    );
  }
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header
          absolute
          color="transparent"
          brand="Material Kit React"
          rightLinks={<HeaderLinks />}
          {...rest}
        />
        <div
          className={classes.pageHeader}
          style={{
            backgroundImage: "url(" + image + ")",
            backgroundSize: "cover",
            backgroundPosition: "top center"
          }}
        >
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={4}>
                <Card className={classes[this.state.cardAnimaton]}>
                  <form className={classes.form}>
                    <CardHeader color="primary" className={classes.cardHeader}>
                      <h4>Login</h4>
                      <div className={classes.socialLine}>
                        <Button
                          justIcon
                          href="#pablo"
                          target="_blank"
                          color="transparent"
                          onClick={e => e.preventDefault()}
                        >
                          <i className={"fab fa-twitter"} />
                        </Button>
                        <Button
                          justIcon
                          href="#pablo"
                          target="_blank"
                          color="transparent"
                          onClick={e => e.preventDefault()}
                        >
                          <i className={"fab fa-facebook"} />
                        </Button>
                        <Button
                          justIcon
                          href="#pablo"
                          target="_blank"
                          color="transparent"
                          onClick={e => e.preventDefault()}
                        >
                          <i className={"fab fa-google-plus-g"} />
                        </Button>
                      </div>
                    </CardHeader>
                    <p className={classes.divider}>Or Be Classical</p>
                    <CardBody>
                          <Form className="center" >
                
                            <FormGroup row>
                              <Label style={{color:"#9830b0"}}   for="username"  md={4}>Username</Label>
                              <Col md={8}>
                                <Input  type="username"   name="username" value={this.state.username} onChange={this.handleChange} placeholder="Enter username" />
                              
                                <br/> { this.state.submitted && <p style={{color:"red"}}>{  this.state.username.length==0||this.state.username.length===""  ? "username cant be blank":"" } </p>}
                      
                              </Col>
                            </FormGroup>

                            <FormGroup row>
                              <Label style={{color:"#9830b0"}}  for="firstName"  md={4}> Password </Label>
                              <Col md={8}>
                                <Input  type="password"  name="password" value={this.state.mobile} onChange={this.handleChange} placeholder="Enter Password" />          
                                <br/> { this.state.submitted  && <p style={{color:"red"}}> { this.state.password.length===0 ||this.state.password.length==='' ? "Password cant be blank" :""} </p>  }
                              </Col>
                            </FormGroup>        
                          </Form>	
                    </CardBody>
                    <CardFooter className={classes.cardFooter}>
                      <Button simple color="primary" size="lg" onClick={this.handleSubmit} >
                        login
                      </Button>
                    </CardFooter>
                  </form>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
          <Footer whiteFont />
        </div>
      </div>
    );
  }
}

export default withStyles(loginPageStyle)(LoginPage);
