(function () {
  'use strict';
  angular.module('public')
  .service('UserInfoService',UserInfoService);

  function UserInfoService() {
    var service=this;
    service.userinfo={};

    service.getInfo=function () {
      return service.userinfo;
    };

  }
})();
