(function(){
'use strict';

angular.module('MenuApp')
.controller('ItemsController', ItemsController);

ItemsController.$inject = ['cat']; //Inject resolve
function ItemsController(cat){
	var view = this;
	view.cat = cat;
}


})();
