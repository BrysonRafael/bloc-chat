var blocChat = angular.module('blocChat', [ 'ui.router', 'firebase' ]);

blocChat.controller('RoomController', ['$state', function ($state) {
  $state.rooms = function Room($firebaseArray);
}])
