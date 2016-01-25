'use strict';

angular.module('seikyo.admin')
.service('AuthService', function ($http, $window, API, localStorageService, UserResource, $state) {
    var loggedUser = localStorageService.get('user');

    if (loggedUser) {
        loggedUser = new UserResource(loggedUser);
    } else {
        loggedUser = new UserResource();
    }

    this.authorize = function (accessLevel) {
        return accessLevel === '*' ||
            (accessLevel === 'logged' && !!localStorageService.get('user'));
    };

    this.login = function (credentials) {
        return $http.post(API.token, credentials)
            .then(function(res) {
                var data = res.data;
                localStorageService.set('user', JSON.stringify(data.user));
                localStorageService.set('token', data.token);

                loggedUser = new UserResource(data.user);
            });
    };

    this.logout = function () {
        localStorageService.remove('user');
        localStorageService.remove('token');
        $state.go('anon.login');
    };

    this.isLogged = function () {
        return !!localStorageService.get('token');;
    };

    this.getLoggedUser = function () {
        return loggedUser;
    };

    this.updateLoggedUser = function (user) {
        localStorageService.set('user', JSON.stringify(user));
        loggedUser = new UserResource(user);
    };

    this.isAdmin = function () {
        return this.getLoggedUser().type === 'admin';
    };
});
