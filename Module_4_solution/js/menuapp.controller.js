(function(){
'use strict';

angular.module('MenuApp')
.controller('MenuAppController', MenuAppController);

MenuAppController.$inject = ['cats']; //Inject resolve
function MenuAppController(cats){
	var view = this;
	view.cats = cats;
}
})();
