var sc2UnitControllers = angular.module('sc2UnitControllers', []);

sc2UnitControllers.controller('ListController', ['$scope', '$http', function($scope, $http) {
	
	$http.get('scripts/data.json').success(function(data) {
		$scope.sc2Units = data;
		$scope.sc2UnitOrder = 'name'
	});
}]);

sc2UnitControllers.controller('DetailsController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
	$http.get('scripts/data.json').success(function(data) {
		$scope.sc2Units = data;
		$scope.whichItem = $routeParams.itemId;

		if ($routeParams.itemId > 0) {
			$scope.prevItem = Number($routeParams.itemId)-1;
		} else {
			$scope.prevItem = $scope.sc2Units.length-1;
		}

		if ($routeParams.itemId < $scope.sc2Units.length-1) {
			$scope.nextItem = Number($routeParams.itemId)+1;
		} else {
			$scope.nextItem = 0;
		}
	});

}]);