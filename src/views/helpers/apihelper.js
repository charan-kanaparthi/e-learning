"use strict"
import axios from 'axios';

 const config = {
	//https://cb360-dashboard-react.herokuapp.com/api
	//http://localhost:5000/api
    //apiUrl : 'https://cb360-preprod-dashboard.herokuapp.com/api'
     apiUrl : 'http://localhost:5000/api'
     // apiUrl : '/api'
     //apiUrl : 'http://localhost:5000/api'

}

function apiHelper() {
		this.postApiCall = function(url,data,callback,errorback){
      let token = JSON.parse(localStorage.getItem('token'));
       axios.defaults.headers.common['Authorization'] = 'JWT ' + token;
		 axios.post(config.apiUrl+url,data)
			.then((response) => {
				callback(response.data)
			})
      .catch((error)=>{
        errorback(error);
      })
		}

		this.getApiResponse = function(url,parmetars,callback){
			let token = JSON.parse(localStorage.getItem('token'));
             axios.defaults.headers.common['Authorization'] = 'JWT ' + token;

             if(parmetars == ""){
             	axios.get(config.apiUrl+url)
				    .then(function(response){
				    callback(response);
				});
             }else{
             	axios.get(config.apiUrl+url,{params:parmetars})
				    .then(function(response){
				    callback(response);
				});
             }

		}

    this.postFormApiCall = function(url,data,callback){
      let token = JSON.parse(localStorage.getItem('token'));
       axios.defaults.headers.common['Authorization'] = 'JWT ' + token;
       //axios.defaults.headers.common['Content-Type'] = 'multipart/form-data';
      let formData = new FormData();
      formData.append("file", data);
        axios.post(config.apiUrl+url,formData)
        .then((response) => {
          callback(response.data)
        })
    }


}
apiHelper = new apiHelper();
export default   apiHelper;
