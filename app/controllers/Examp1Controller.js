/* Controller - Examp1Controller */
/*
 * @module  Examp1Controller
 * @author  Esteban López A
 * @param   $scope, exampl1Factory
 * @created 08/09/2013
*/

 app.controller('Examp1Controller', ['$scope', 'exampl1Factory', function($scope, exampl1Factory) {
	$scope.newContact = {};
	$scope.obj = {};
	$scope.obj.showViewInfo = true;
	$scope.obj.showViewExample = false;
	
	
	$scope.save = function(newContact){
		newContact.id = exampl1Factory.listGetNextId();//Generate new Id
		exampl1Factory.postList(newContact);//invoked method to save the object
		$scope.newContact = {}; // Clean input values of _addView
	};

	$scope.initialize = function () {
	    $scope.contactList = exampl1Factory.getList();//Load data from factory
	};
	

	$scope.initialize();
	


	
}]);

  