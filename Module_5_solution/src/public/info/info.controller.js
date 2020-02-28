(function () {
  'use strict';

  angular.module('public')
  .controller('InfoController',InfoController);

  InfoController.$inject=['returned_data','ApiPath','UserInfoService']
  function InfoController(returned_data,ApiPath,UserInfoService) {
    var userdata=this;

    userdata.userinfo=returned_data;
    userdata.len=Object.keys(userdata.userinfo).length
    userdata.ApiPath=ApiPath;
  }
})();
