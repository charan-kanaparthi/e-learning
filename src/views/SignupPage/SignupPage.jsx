import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
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
import { Col, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class SignupPage extends React.Component {
  constructor(props) {
    super(props);
    // we use this to make the card to appear after the page has been rendered
    this.state = {
      cardAnimaton: "cardHidden",firstName:'',lastName:"",email:"",mobile:"",pincode:"",validation:{ firstName:null,lastName:null,email:null,mobile:null,pincode:null}
    };
    this.handleChange=this.handleChange.bind(this);
  }
  handleSubmit(){
    history.push('/landing-page');
  }
  handleChange(event) {
    console.log(event.target.name)
    var type=event.target.name
    var value=event.target.value    
    if(type==='firstName'){
        this.setState({firstName: value});
        console.log(this.state.firstName)
      }
      if(type==='lastName'){
      this.setState({lastName: value});
        		
    }
      if(type==='email'){
        this.setState({email: value}); 
        
      }
      if(type==='mobile'){ 
          var phoneno = /^\d{10}$/;
        this.setState({mobile: value}); 	
         		
      }
      if(type==='pincode'){
        this.setState({pincode: value});
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
		          <Label for="firstName" md={4}>First Name</Label>
		          <Col  md={8}>
		            <Input  type="text" ref='firstName'  name="firstName" value={this.state.firstName} onChange={this.handleChange} placeholder="Enter First Name" />
		          
		           <br/> { this.state.validation.firstName  && <p className={"danger"}> First Name cant be blank </p>}
	     
		          </Col>
		        </FormGroup>
		        <FormGroup row>
		          <Label for="firstName"  md={4}>Last Name</Label>
		          <Col md={8}>
		            <Input  type="text"  name="lastName" value={this.state.lastName} onChange={this.handleChange} placeholder="Enter Last Name" />
		          
		               <br/> { this.state.validation.lastName  && <p className={"danger"}> Last Name cant be blank </p>}
	     
		          </Col>
		        </FormGroup>

		        <FormGroup row>
		          <Label for="firstName"  md={4}>Email</Label>
		          <Col md={8}>
		            <Input  type="email"   name="email" value={this.state.email} onChange={this.handleChange} placeholder="Enter Email" />
		          
		            <br/> { this.state.validation.email  && <p className={"danger"}>{ this.state.email.length===0  ? "Email cant be blank" :"Email is Invalid"} </p>}
	     
		          </Col>
		        </FormGroup>

		        <FormGroup row>
		          <Label for="firstName"  md={4}> Mobile No </Label>
		          <Col md={8}>
		            <Input  type="text"  name="mobile" value={this.state.mobile} onChange={this.handleChange} placeholder="Enter Mobile No" />          
		            <br/> { this.state.validation.mobile  && <p className={"danger"}> { this.state.mobile.length===0  ? "Mobile No cant be blank" :"Mobile No is Invalid"} </p>  }
		          </Col>
		        </FormGroup>


		        <FormGroup row>
		          <Label for="firstName"  md={4}> Pin Code  </Label>
		          <Col md={8}>
		            <Input  type="text"   name="pincode" value={this.state.pincode} onChange={this.handleChange}  placeholder="Enter Pin Code" />          
		                <br/> { this.state.validation.pincode  && <p className={"danger"}> { this.state.pincode.length===0  ? "Pincode cant be blank" :"Pincode is Invalid"}  </p>}
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

export default withStyles(loginPageStyle)(SignupPage);
