(function () {
  'use strict';
  angular.module('public')
  .controller('SignUpController',SignUpController)
  .constant('SingleItemPath', "https://rajgaurav99-course5.herokuapp.com/");

  SignUpController.$inject=['$http','SingleItemPath','UserInfoService']
  function SignUpController($http,SingleItemPath,UserInfoService) {
    var signup=this;
    signup.serverError=false;
    signup.flag=0;

    signup.submit=function () {
      var response = $http({
  			method: "GET",
  			url: (SingleItemPath + "menu_items/" + signup.short_name + ".json")
		  });
      response.then(function (result) {
        if(result.status===200){
          signup.flag=1;
          var userdata={};
          userdata['fname']=signup.fName;
          userdata['lname']=signup.lName;
          userdata['email']=signup.email;
          userdata['phone']=signup.phoneNum;
          userdata['favMenuItem']=result.data;
          UserInfoService.userinfo=userdata;
          signup.serverError=false;
        }
      })
      .catch(function(error){
        if(error.status===500){
          signup.serverError=true;
        }
      })
    };
  }
})();
