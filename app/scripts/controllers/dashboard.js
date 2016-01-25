'use strict';

angular.module('seikyo.admin')

.controller('DashboardCtrl', function ($scope, $http, $state, API, SeikyoResource) {
	$scope.getSeikyos = function (year) {
		SeikyoResource.getYear({year: year}, function (seikyos) {
			$scope.seikyos = seikyos
			for (var i = 0; i < seikyos.length; i++) {
				var d = new Date(seikyos[i].date);
				$scope.seikyos[i].date = monthNames[d.getMonth()]
			};
		})
	};

	$scope.editSeikyo = function (index) {
		var seikyo = $scope.seikyos[index];
		$state.go('user.edit', {seikyo: seikyo._id})
	}

	$scope.showSeikyo = function (index) {
		$scope.seikyo = $scope.seikyos[index];
	}

	$scope.cancel = function () {
		delete $scope.seikyo
	}

	var monthNames = ["January", "February", "March", "April", "May", "June",
	  "July", "August", "September", "October", "November", "December"
	];
	var currentYear = new Date().getFullYear(),
		years = [],
		startYear = 1980;

	while ( startYear <= currentYear ) {
        years.push(startYear++);
	} 
	years.reverse()
	$scope.years = years;
	
	$scope.seikyos = []
	
    $scope.navigate = $state.go
});
