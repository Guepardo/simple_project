var app = angular.module('App', ['ngRoute', 'ngResource']);

app.config(function($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider
    .when('/', {
        templateUrl : 'partials/main.html'
    })
    .when('/system', {
        templateUrl : 'partials/systems.html', 
        controller : 'SystemsController'
    })
    .when('/system/new', {
        templateUrl : 'partials/new_system.html',
        controller : 'SystemsController'
    })
    .otherwise({
        template : '<h1>None</h1><p>Nothing has been selected</p>'
    });
});

app.factory('System', function($resource) {
    return $resource('/api/system/:id');
}); 

app.controller('SystemsController', function($scope, System) {
    $scope.system = {};
    $scope.systems = []; 

    $scope.formHasError = function() {
        return Object.keys($scope.new_system.$error).length > 0
    }

    $scope.save = function() {
        if( Object.keys($scope.new_system.$error).length > 0 ) {
            $scope.invalid = true;
            return;
        }

        System.save($scope.system, function(data) {
            alert(data);
            console.log(data);
        });
    }
});