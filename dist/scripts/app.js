var blocChat = angular.module('blocChat', [ 'ui.router', 'firebase' ]);

blocChat.controller('roomsController', function($state) {
    $scope.all;
});

/* $stateProvider.state('rooms') {
  template: '<h1>{{title}}</h1>',
  controller: function($scope){
    $scope.title = 'Rooms';
  }
}) */