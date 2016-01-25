'use strict';

angular.module('seikyo.admin')
.controller('MainCtrl', function ($scope, AuthService, Modal, API, $rootScope, $animate, $mdSidenav) {

    $scope.toUrl = API.toUrl

    $scope.hasToken = function() {
        return AuthService.isLogged();
    };

    $scope.highlight = function (e) {
        Modal('highlight').instance({
            view: 'views/modals/floating-text.html',
            scope: { source: angular.element(e.currentTarget) }
        })
    }

    $scope.toggleSidenav = function () {
        return $mdSidenav('left').toggle();
    };

    $scope.exit = function() {
        AuthService.logout();
    };
});
