(function () {
  'use strict'

  angular.module('NarrowItDownApp',[])
  .controller('NarrowItDownController',NarrowItDownController)
  .service('MenuSearchService',MenuSearchService)
  .constant('ApiBasePath',"https://davids-restaurant.herokuapp.com/menu_items.json")
  .directive('foundItems',FoundItems);

  function FoundItems() {
    var ddo={
            restrict: 'E',
            templateUrl: 'foundItems.html',
            scope: {
				          remove: '&onRemove',
				          array: '<array'
			             }
        };
    return ddo;
  }

  NarrowItDownController.$inject=['MenuSearchService'];
  function NarrowItDownController(MenuSearchService) {
    var ctrl=this;
    ctrl.searchTerm="";

    ctrl.search_menu=function(){

      var promise=MenuSearchService.getMatchedMenuItems(ctrl.searchTerm);
      promise.then(function (response) {
        if(ctrl.searchTerm===""){
          ctrl.found=[];
        }
        else{
          ctrl.found=response;
        }

      })
      .catch(function (error) {
        console.log("Error in fetching the data from source");
      });
    }

    ctrl.remove=function(item_index){
      ctrl.found.splice(item_index,1);
    };



  }

  MenuSearchService.$inject=['$http','ApiBasePath'];
  function MenuSearchService($http,ApiBasePath) {
    var service=this;
    var found_items=[];
    service.getMatchedMenuItems=function (searchTerm) {
        return $http({
          method:"GET",
          url: (ApiBasePath)
        })
        .then(function(result){
          var all_items=result.data.menu_items;
          var i=0;
          found_items=[];
          for(i=0;i<all_items.length;i++){
            if(all_items[i].description.toLowerCase().indexOf(searchTerm.toLowerCase())!==-1){
              found_items.push(all_items[i]);
            }
          }
          return found_items;
        });
    };

  }
})();
