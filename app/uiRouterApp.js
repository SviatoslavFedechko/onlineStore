angular.module('uiRouterDemoApp', ['ui.router'])
    .config(function ($stateProvider) {

        $stateProvider
            // simple state with template
            .state('home', {
                templateUrl: 'home/home.html',
                controller: 'homeController'
            })
            
            .state('home.views', {
                views: {
                    "header": {templateUrl: 'include/header.html'},
                    "sideBar": {templateUrl: 'include/leftNav.html'},
                    "main": {templateUrl: 'home/main.html'}
                }
            })

    });

// use the $state service to navigate to specific state
angular.module('uiRouterDemoApp')
    .run(function ($state) {
        $state.go('home');
    });
