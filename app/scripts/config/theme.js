'use strict';

angular.module('seikyo.admin')

.config(function ($mdThemingProvider, $mdIconProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('blue')
        .accentPalette('light-blue');

    $mdIconProvider
        .defaultFontSet('material-icons')
});
