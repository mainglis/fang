angular
    .module('fang', ['ui.router'])
    .config(['$stateProvider', '$urlRouterProvider' '$interpolateProvider', function($stateProvider, $urlRouterProvider, $interpolateProvider) {

        $interpolateProvider.startSymbol('[[');
        $interpolateProvider.endSymbol(']]');

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url:'/',
                templateUrl: 'home.html',
                controller: 'homeController'
            })
            .state('hello', {
                url:'/',
                templateUrl: '/hello',
                controller: 'helloController'
            })

    }])
    .controller('homeController', [
        '$scope',
        function($scope) {
            console.log('i am in the home controller');
        }
    ])
    .controller('helloController', [
        '$scope',
        function($scope) {
            console.log('i am in the hello controller');
        }
    ]);