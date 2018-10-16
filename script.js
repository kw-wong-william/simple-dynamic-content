var app = angular.module('abc', []);

app.controller('abcController', function ($scope) {
	
	$scope.toSwitch = function(page) {
		$scope.page = page;
	}
});
   