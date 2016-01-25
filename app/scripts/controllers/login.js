'use strict';

angular.module('seikyo.admin')

.controller('LogInCtrl', function ($scope, $state, toaster, AuthService, $stateParams, API, $http) {

    $scope.enter = function (loginForm) {

        if (loginForm.$valid) {
            AuthService.login($scope.user)
                .then(function(user){
                    $state.go('user.dashboard');
                }, function (err) {
                    if (err.message === 'NotAuthorized')
                        return toaster.pop('error', '', 'No esta autorizado');
                    toaster.pop('error', '', 'Sus credenciales son incorrectas');
                });
        } else {
            if (loginForm.email.$invalid) {
                toaster.pop('error', '', 'Correo electrónico invalido');
            } else {
                toaster.pop('error', '', 'Contraseña invalida');
            }
        }
    };


})
.run(function($rootScope, $state, AuthService){
    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){

        if(!('data' in toState) || !('access' in toState.data)){
            event.preventDefault();
        }else if(!AuthService.authorize(toState.data.access)){
            event.preventDefault();
            AuthService.logout();
            if(toState.name !== 'anon.login') {
                $state.go('anon.login');
            }
        }
    });
});
