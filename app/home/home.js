angular.module('uiRouterDemoApp')
    .controller('homeController', function ($state) {
        $state.go('home.views');
    });