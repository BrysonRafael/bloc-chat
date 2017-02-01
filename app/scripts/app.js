var blocChat = angular.module('blocChat', [ 'ui.router', 'firebase' ]);

blocChat.controller('RoomController', ['$state', function ($state) {
  this.rooms = [];//function Room($firebaseArray);
}])
