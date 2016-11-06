angular.module('onlineStoreApp')
    .controller('homeController', function ($state) {
        $state.go('home.main');
    });