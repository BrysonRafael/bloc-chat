var blocChat = angular.module('blocChat', [ 'ui.router', 'firebase' ]);

//blocChat.controller('RoomController', ['$state', function ($state) {
  //	this.rooms = [];//function Room($firebaseArray);
//}])

$stateProvider.state('rooms', {
  template: '<h1>{{title}}</h1>',
  controller: function($scope){
    $scope.title = 'Rooms';
  }
})