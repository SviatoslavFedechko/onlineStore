angular.module('onlineStoreApp', ['ui.router'])
    .config(function ($stateProvider) {

        $stateProvider
            .state('home', {
                templateUrl: 'home/home.html',
                controller: 'homeController'
            })
            
            .state('home.main', {
                url: '/main',
                templateUrl: 'home/sub-views/main.html'
            })
            
            .state('search', {
                url: '/search/:value',
                templateUrl: 'search/main.html',
                controller: 'searchController'
            })
            
            .state('home.electronics', {
                url: '/electronics',
                templateUrl: 'home/sub-views/electronics.html'
            })
            
            .state('home.fashion', {
                url: '/fashion',
                templateUrl: 'home/sub-views/fashion.html'
            })
            
            .state('home.home&garden', {
                url: '/home&garden',
                templateUrl: 'home/sub-views/home&garden.html'
            })
            
            .state('electronics', {
                url: '/electronicsFull',
                templateUrl: 'electronics/electronicsFull.html',
                controller: 'electronicsController'
            })
            
            .state('electronics.views', {
                views: {
                    "header": {templateUrl: 'electronics/header.html'},
                    "sideBar": {templateUrl: 'electronics/sideBar.html'},
                    "main": {templateUrl: 'electronics/main.html'}
                }
            })
            
            .state('appleWatch', {
                url: '/electronicsFull/appleWatch',
                templateUrl: 'electronics/appleWatch/appleWatch.html'
            })
    });

// use the $state service to navigate to specific state
angular.module('onlineStoreApp')
    .run(function ($state) {
        $state.go('home');
    });
