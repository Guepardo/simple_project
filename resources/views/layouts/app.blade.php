<!DOCTYPE html>
<html lang="pt" ng-app="App">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="/bower_components/bootstrap/dist/css/bootstrap.min.css" >
    <link rel="stylesheet" href="/css/app.css" >
    <title>@yield('title')</title>
  </head>
  <body>
    @include('layouts._navbar')

    <div ng-view></div>
    <script src="/bower_components/angular/angular.js"></script>
    <script src="/bower_components/angular-route/angular-route.js"></script>
    <script src="/bower_components/angular-resource/angular-resource.js"></script>
    <script src="/bower_components/jquery/dist/jquery.min.js" ></script>
    <script src="/bower_components/tether/dist/js/tether.min.js" ></script>
    <script src="/bower_components/bootstrap/dist/js/bootstrap.min.js"></script>

    <script src="/js/app.js"></script>
  </body>
</html>