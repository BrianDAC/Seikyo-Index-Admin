'use-strict';
angular.module('seikyo.admin')
.factory('UserResource', function ($resource, API) {
    return $resource(API.users);
});
