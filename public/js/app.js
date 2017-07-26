var app = angular.module('App', ['ngRoute', 'ngResource']);

// Roteamento.
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


// Fábrica que gera entidade no padrão resource.
app.factory('System', function($resource) {
    return $resource('/api/system/:id');
}); 


// Serviços para o controlador de Sistemas.
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


// Controlle de Sistemas.
app.controller('SystemsController', function($scope, System, SystemSearch) {
    $scope.system = {};
    $scope.systems = []; 
    $scope.invalid = false;
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
            if( data.success ) {
                $scope.clearFieldsForm();
                alert('Sistema cadastrado com sucesso.');
            }
        });
    };

    $scope.updatePagination = function(data) {
        $scope.systems = data.data;
        var total = Math.round((data.total / data.per_page) + 0.5); 
        $scope.pagination.total = ( total == 0 ) ? 1 : total;
        $scope.pagination.page = data.current_page;
    };

    $scope.goTo = function(index) {
        $scope.search(index);
    };

    $scope.goBack = function() {
        window.history.back();
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

    $scope.clearFieldsQuery = function() {
        $scope.query = {};
    };

    $scope.clearFieldsForm = function() {
        $scope.system = {};
    };

    $scope.paginationNext = function() {
        if ($scope.pagination.page < $scope.pagination.total) {
            $scope.search(++$scope.pagination.page);
        }
    };

    $scope.paginationPrevious = function() {
        if ($scope.pagination.page != 0) {
            $scope.search(--$scope.pagination.page);
        }
    };

    $scope.search = function(page = undefined) {
        var query = $scope.buildSearchQuery();
        SystemSearch.search(query, page)
            .then( function( response ) {
                $scope.updatePagination(response.data);
            }, function (error) {
                alert("Desculpe, mas houve um erro no servidor. Tente mais tarde.");
            });
    };

    $scope.range = function(number) {
        return new Array(number);
    }
});


// Diretivas.
app.directive('loading',  ['$http' ,function ($http) {
    return {
        restrict: 'AE',
        link: function (scope, elm, attrs) {
            scope.isLoading = function () {
                return $http.pendingRequests.length > 0;
            };
            scope.$watch(scope.isLoading, function (v) {
                if(v){
                    $(elm).show();
                }else{
                    $(elm).hide();
                }
            });
        }
    };
}]);