(function () {
  'use strict'

  angular.module('ShoppingListCheckOff',[])
  .controller('ToBuyController',ToBuyController)
  .controller('AlreadyBoughtController',AlreadyBoughtController)
  .service('ShoppingListCheckOffService',ShoppingListCheckOffService);

  ToBuyController.$inject=['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var buy_item_controller=this;
    buy_item_controller.items=ShoppingListCheckOffService.getToBuyItems();

    buy_item_controller.boughtitem=function (item_index) {
      ShoppingListCheckOffService.bought(item_index);
    };

  }

  AlreadyBoughtController.$inject=['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var bought_item_controller=this;
    bought_item_controller.items=ShoppingListCheckOffService.getAlreadyBoughtItems();

  }

  function ShoppingListCheckOffService() {
    var service=this;
    var to_buy=[
          {name:"Cookies",quantity:10},
          {name:"Chips",quantity:5},
          {name:"Pepsi", quantity:6},
          {name:"Cakes",quantity:2},
          {name:"Burgers", quantity:10}
        ];
    var already_bought=[];

    service.bought=function (item_index) {
      var item=to_buy[item_index];
      to_buy.splice(item_index,1);
      already_bought.push(item);
    };

    service.getToBuyItems=function(){
      return to_buy;
    };

    service.getAlreadyBoughtItems=function(){
      return already_bought;
    };

  }





})();
