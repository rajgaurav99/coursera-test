(function () {
  'use strict'

  angular.module('LunchCheck',[])
  .controller('LunchCheckController', LunchCheckController);
  LunchCheckController.$inject=['$scope'];

  function LunchCheckController($scope){
    $scope.msg="";
    $scope.items="";
    $scope.fontcolor="black";

    $scope.checkup= function(){
      var returnresult= getitems($scope.items);
      var output=returnresult[0];
      var textcolor=returnresult[1];
      $scope.msg=output;
      $scope.fontcolor=textcolor;
    };


    function getitems(itemlist){
      var result="";
      var color="";
      if(itemlist.length==0){
        result="Please enter data first";
        color="red";
      }
      else{
        var a=itemlist.split(',');
        color="green";
        if(a.length<=3){
          result="Enjoy!";
        }
        else{
          result="Too much";
        }
      }
      return [result,color];
    }
  }

})();
