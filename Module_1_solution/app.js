(function () {
  'use strict'

  angular.module('LunchCheck',[])
  .controller('LunchCheckController', LunchCheckController);
  LunchCheckController.$inject=['$scope'];

  function LunchCheckController($scope){
    $scope.msg="";
    $scope.items="";

    $scope.checkup= function(){
      var output= getitems($scope.items);
      $scope.msg=output;
    };

    function getitems(itemlist){
      var result="";
      if(itemlist.length==0){
        result="Please enter data first";
      }
      else{
        var a=itemlist.split(',');
        if(a.length<=3){
          result="Enjoy!";
        }
        else{
          result="Too much";
        }
      }
      return result;
    }
  }

})();
