'use strict';

angular.module('seikyo.admin')
.controller('UserDisplayCtrl', function ($scope, Modal, $state, $http, API, $mdSidenav, SeikyoResource, toaster) {

	$scope.addSeikyo = function () {
        Modal.input.render({
            label: 'Fecha'
        }).on('accept', function (value) {
        	if (!value) {
        		return toaster.pop('error', '', 'Introduzca una Fecha');
        	};
        	var date = "",
        		year = "",
        		result = {};

        	for (var i = 0; i < 15; i++) {
        		date = date + value.month.toString().charAt(i); 
        	};
        	for (var i = 11 ; i < 15; i++) {
        		year = year + value.month.toString().charAt(i); 
        	};

        	result.date = date;
        	result.year = year;
            return SeikyoResource.newSeikyo({}, result, function () {
            	toaster.pop('success', '', 'Seikyo Creado');
            }, function (err) {
            	if (err.data.message == "DocumentAlreadyExist") {
            		return toaster.pop('error', '', 'Ya existe un seikyo de esta fecha');
            	};
            	toaster.pop('error', '', 'Ocurrio un error');
            })
        })
    };

    $scope.navigate = $state.go;

    $scope.$on('$stateChangeSuccess', function (event) {
        $mdSidenav('left').close();
    })
});
