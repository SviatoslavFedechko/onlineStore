angular.module('onlineStoreApp')
    .controller('headerController', function ($state, $scope) {
        var self = this;
        $scope.searchValue = function(val) {
            $state.go('search', { 'value': val });
        }
    });