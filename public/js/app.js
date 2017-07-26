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
        templateUrl : 'partials/main.html'
    });
});

app.factory('System', function($resource) {
    return $resource('/api/system/:id');
}); 

app.service('SystemSearch', function($http) {
    var endPoint = '/api/system';
    this.search = function(query, page) {
        var args = { query: query };
        if ( page != undefined ) {
            args['page'] = page;
        }
        return $http.get(endPoint, { params: args });
    };
});

app.controller('SystemsController', function($scope, System, SystemSearch) {
    $scope.system = {};
    $scope.systems = []; 

    $scope.pagination = {
        page: 0,
        total: 0
    };

    $scope.formHasError = function() {
        return Object.keys($scope.new_system.$error).length > 0
    };

    $scope.save = function() {
        if( Object.keys($scope.new_system.$error).length > 0 ) {
            $scope.invalid = true;
            return;
        }

        System.save($scope.system, function(data) {
            // todo
        });
    };

    $scope.updatePagination = function(data) {
        $scope.systems = data.data;
        $scope.pagination.total = Math.floor(data.total / data.per_page);
        $scope.pagination.page = data.current_page;
    };

    $scope.goTo = function(index) {
        $scope.search(index);
    };

    $scope.buildSearchQuery = function() {
        if ($scope.query == undefined ) {
            return '';
        }

        var query = Object
        .keys($scope.query)
        .map( function(key) { return $scope.query[key]; })
        .reduce( function(previous, next) { return previous + ' ' +  next; });
        return query;
    };

    $scope.clearFields = function() {
        $scope.query = {};
    };

    $scope.search = function(page = undefined) {
        var query = $scope.buildSearchQuery();
        SystemSearch.search(query, page)
            .then( function( response ) {
                $scope.updatePagination(response.data);
            }, function (error) {

            });
    };

    $scope.range = function(number) {
        return new Array(number);
    }
});