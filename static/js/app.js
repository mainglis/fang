angular
    .module("fang", ['ui.router'])
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url:'/',
                templateUrl: 'home.html',
                controller: 'homeController'
            })

    }])
    .controller('homeController', [
        '$scope',
        function($scope) {
            console.log('i am in the homecontroller');
        }
    ]);