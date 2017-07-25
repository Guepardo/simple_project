<!DOCTYPE html>
<html lang="pt">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="/bower_components/bootstrap/dist/css/bootstrap.min.css" >
    <title>@yield('title')</title>
  </head>
  <body>
    @include('layouts._navbar')
    @yield('content')
    <script src="/bower_components/jquery/dist/jquery.min.js" ></script>
    <script src="/bower_components/tether/dist/js/tether.min.js" ></script>
    <script src="/bower_components/bootstrap/dist/js/bootstrap.min.js"></script>
  </body>
</html>