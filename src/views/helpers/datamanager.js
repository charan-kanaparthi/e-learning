"use strict"

import apiHelper from './apihelper';
import { func } from 'prop-types';
var _=require("lodash")
var users=require("../LoginPage/login.json")
function DataManager() {

  var cacheData = {};
  var localData = {};
  this.logOut = function(){
    localData = {};
    cacheData = {};
  }
  this.isLoggedIn=function(){
        let token = this.getToken();
        if(token==undefined)
            return false;
        return true;
    }
  
  this.checklogin=function(loginData,callback){
     var res={status:false,data:null}
    _.forEach(users.users, function(value) {
      if(value.username==loginData.username  && value.password==loginData.password){
        res.status=true
        res.data=value    
      }
    });
    callback(res)
  }

    this.getData = function(url, params,  processor, callback,cache) {
		params = this.addHeaderToParams(params);
		if(params==null)
			return;
		this.getDataOnly(url,params,processor,callback,cache);
	}
  this.getDataOnly = function(url, params,  processor, callback,cache) {
    let key;
    let data;
    if(cache){
      key = generateKey(url,params);
      data = cacheData[key];
      if (data != undefined) {
       callback(data);
       return;
      }
    }

    apiHelper.getApiResponse(url, params, function(response) {
      if (processor != null) {
        var data = processor(response.data);
      } else
      	data = response.data;
      if(cache)
        cacheData[key] = data;
      callback(data)
    });


  }




//   this.getHeaderState = function() {
//     return localData["HeaderState"] ? localData["HeaderState"] : JSON.parse(localStorage.getItem("HeaderState"));
//   }
//  this.setHeaderState = function(headerState) {
// 	 localData["HeaderState"] = headerState;
// 	 localStorage.setItem("HeaderState", JSON.stringify(headerState));
// 	 EventEmitter.emit('headerStateChanged');
//  }
//  this.setHeaderOptions = function(showCampaign,showClient,showDateRange){
// 	 var headerState = JSON.parse(localStorage.getItem('HeaderState'))
// 	 if(headerState == null)
// 		 return null;
// 	 headerState.showClient=showClient;
// 	 headerState.showDateRange=showDateRange;
// 	 headerState.showCampaign=showCampaign;
// 	 EventEmitter.emit('RefreshHeader',headerState);
//  }
//  this.disableHeaderOptions = function(disableCampaign,disableClient,showDateRange){
// 	 var headerState = JSON.parse(localStorage.getItem('HeaderState'))
// 	 if(headerState == null)
// 		 return null;
// 	 headerState.disableCampaign=disableCampaign;
// 	 headerState.disableClient=disableClient;
//    headerState.showDateRange=showDateRange;
// 	 EventEmitter.emit('RefreshHeader',headerState);
//  }
  this.getToken = function() {
    //return localData["token"] ? localData["token"] : JSON.parse(localStorage.getItem("token"));
      return localStorage.getItem("token") ?  JSON.parse(localStorage.getItem("token")):null;
  }
  this.setToken = function(token) {
    localData["token"] = token;
    localStorage.setItem("token", JSON.stringify(token));
  }

  this.isInRole = function(userRole){
    if(this.getUserInfo()){
      let roles = this.getUserInfo().userRights;
      if(roles==undefined)
      	return false;
      if(roles.includes(userRole))
        return true;
    }
  	return false;
  }
  this.getUserInfo = function() {
    return localData["userInfo"] ? localData["userInfo"] : JSON.parse(localStorage.getItem("userInfo"));
  }

  this.setUserInfo = function(userInfo) {
    localData["userInfo"] = userInfo;
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
  }
  // set the Date
  this.setDateRange = function(startDate, endDate) {
		// var headerState = localData["HeaderState"];
		var headerState =  JSON.parse(localStorage.getItem("HeaderState"));
		if(headerState == null)
		  return null;
		headerState.start = startDate;
		headerState.end = endDate;
		this.setHeaderState(headerState);
  }


  this.addHeaderToParams = function(parameters) {
   	// var headerState = localData["HeaderState"];
		var headerState = JSON.parse(localStorage.getItem('HeaderState'))
		if(headerState == null)
		  return null;
		if(headerState.showClient&&headerState.clientId==null)
			return null;
		parameters.clientId = headerState.clientId;
		parameters.campaignId = headerState.campignId;
		parameters.end = headerState.end;
		parameters.start = headerState.start;
		parameters.timeZone = new Date().getTimezoneOffset();
    return parameters;
  }

  this.getHeaderDateParams = function(parameters) {
    // var headerState = localData["HeaderState"];
    var headerState = JSON.parse(localStorage.getItem('HeaderState'))
    if(headerState == null)
      return null;
    if(headerState.showClient&&headerState.clientId==null)
      return null;
    if(parameters==null)
      parameters = {};
    parameters.end = headerState.end;
    parameters.start = headerState.start;
    parameters.timeZone = new Date().getTimezoneOffset();
    return parameters;
  }
  function generateKey(url,params) {
  	var key = url;
  	if(params==null)
  		return key;
  	let keyNames = Object.keys(params);
  	for(var i=0;i<keyNames.length;i++){
  		key+= keyNames[i]+params[keyNames[i]];
  	}
    return key;
  }
  this.showLoader = function(){
    if(document.getElementById('loader')==null)
      return;
  	document.getElementById('loader').style.display='';
  }
  this.hideLoader = function(){
    if(document.getElementById('loader')==null)
      return;
  	document.getElementById('loader').style.display='none';
  }
}
DataManager = new DataManager();
export default  DataManager;
