'use strict';

angular.module('seikyo.admin')

.config(function ($stateProvider, $locationProvider) {
    if (/\.com$/.test(location.hostname))
        $locationProvider.html5Mode(true);

    $stateProvider
        .state('anon', {
            abstract: true,
            template: '<div flex layout ui-view />',
            data: {
                access: '*'
            }
        })
        .state('anon.home', {
            url: '/',
            controller: function ($state, AuthService) {
                if (AuthService.isLogged())
                    $state.go('user.dashboard');
                else
                    $state.go('anon.login');
            }
        })
        .state('anon.login', {
            url: '/login',
            templateUrl: 'views/login.html',
            controller: 'LogInCtrl'
        });

    $stateProvider
        .state('user', {
            abstract: true,
            templateUrl: 'views/user-display.html',
            controller: 'UserDisplayCtrl',
            data: {
                access: 'logged'
            }
        })
        .state('user.dashboard', {
            url: '/dashboard',
            templateUrl: 'views/dashboard.html',
            controller: 'DashboardCtrl'
        })
        .state('user.edit', {
            url: '/seikyo/edit/:seikyo',
            templateUrl: 'views/edit.html',
            controller: 'SeikyoCtrl',
            resolve: {
                seikyo: function (SeikyoResource, $stateParams) {
                    return SeikyoResource.seikyo({seikyo: $stateParams.seikyo}).$promise;
                },
                divisions: function (SeikyoResource) {
                    return SeikyoResource.getDivision().$promise;
                }
            }
        })
});
