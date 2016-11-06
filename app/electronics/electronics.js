angular.module('onlineStoreApp')
    .controller('electronicsController', function ($state) {
        $state.go('electronics.views');
    });