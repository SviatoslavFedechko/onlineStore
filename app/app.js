'use strict';

// Declare app level module which depends on views, and components
angular.module('onlineStoreApp', [
    'ui.router'
]).
config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider().otherwise('/home');

    $stateProvider
        .state('home',{
            views: {
                '': {}


            }
        })
});