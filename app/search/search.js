angular.module('onlineStoreApp')
    .controller('searchController', function ($scope, $stateParams, $state) {
        $scope.iphones = [{
            imglink: '../images/electronics/iphone/0.jpg',
            description: 'Apple iPhone 6 A1586 Sprint 4.7in Factory Unlocked Smartphone GSM 16/64/128GB',
            price: 'US $430.38'
        }, {
            imglink: '../images/electronics/iphone/1.jpg',
            description: 'New Open Box Apple iPhone 6 16GB GSM FACTORY UNLOCKED Gold Smartphone',
            price: 'US $469.00'
        }, {
            imglink: '../images/electronics/iphone/2.jpg',
            description: 'Apple iPhone 6 - 16GB - Space Gray (Unlocked) Smartphone - NEW OPEN BOX',
            price: 'US $489.95'
        }, {
            imglink: '../images/electronics/iphone/3.jpg',
            description: '4.7" Apple iPhone 6 16GB/64GB GSM iOS 9 UNLOCKED 8MP Dual-core Smartphone ',
            price: 'US $492.95'
        }, {
            imglink: '../images/electronics/iphone/4.jpg',
            description: 'Apple iPhone 6 64GB Gold (AT&T Unlocked) Smartphone',
            price: 'US $449.74'
        }, {
            imglink: '../images/electronics/iphone/5.jpg',
            description: 'Apple iPhone 6 4.7" Verizon A1549 128GB GSM Factory Unlocked Smartphone',
            price: 'US $449.99'
        }, {
            imglink: '../images/electronics/iphone/6.jpg',
            description: '4.7" Apple iPhone 6 16GB/64GB GSM iOS 9 UNLOCKED 8MP Dual-core Smartphone ',
            price: 'US $495.95'
        }, {
            imglink: '../images/electronics/iphone/7.jpg',
            description: 'Original Apple iPhone 6 A1549 GSM  Factory Unlocked phone 16GB LTE AT&T T-Mobile',
            price: 'US $505.98'
        }, {
            imglink: '../images/electronics/iphone/8.jpg',
            description: '-*BRAND NEW*/- APPLE iPhone 6 16GB 4.7 Latest Model FACTORY UNLOCKED Space Grey',
            price: 'US $652.49'
        }, {
            imglink: '../images/electronics/iphone/9.jpg',
            description: '16/64/128GB Apple iPhone 6 Plus 5.5" A1522 Verizon Touch ID Unlocked Smartphone',
            price: 'US $458.99'
        }, {
            imglink: '../images/electronics/iphone/10.jpg',
            description: '16/64/128 GB Apple iPhone 6 A1586 Sprint Factory Unlocked Smartphone',
            price: 'US $409.99'
        }, {
            imglink: '../images/electronics/iphone/11.jpg',
            description: 'New Open Box Apple iPhone 6 16GB GSM FACTORY UNLOCKED Silver Smartphone',
            price: 'US $469.00'
        }];
        $scope.filterValue = $stateParams.value;
        $scope.state = $state;
    });