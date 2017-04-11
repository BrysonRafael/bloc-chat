function config($stateProvider, $locationProvider) {
    $locationProvider
        .html5Mode({
            enabled: true,
            requireBase: false
        });

    $stateProvider
        .state('home', {
            url: '/',
            controller: 'RoomController as ctrl',
            templateUrl: '/templates/home.html'
        })
}

function BlocChatCookies($cookies, $uibModal) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    if (!currentUser || currentUser === '') {
      $uibModal.open({
        // Modal configuration object properties
        templateUrl: '/templates/NameModal.html',
        controller: 'NameModalController',
        controllerAs: 'modal'

      })
    }
  }

var blocChat = angular
    .module('blocChat', ['ui.router', 'ui.bootstrap', 'firebase', 'ngCookies'])
    .config(config);
    .run(['$cookies', '$uibModal', BlocChatCookies]);

blocChat.controller('RoomController', ['$state', 'Room', 'Message', '$uibModal',
    function($state, Room, Message, $uibModal) {
        this.rooms = Room.all;

        this.addRoom = function addRoom() {
            var modalInstance = $uibModal.open({
                templateUrl: '/templates/modal.html',
                controller: 'ModalController',
                controllerAs: 'modal'
            });

            modalInstance.result.then(function(roomName) {
                Room.add(roomName);
            });
        }; //- addRoom()

        this.setRoom = function setRoom(roomId) {
            this.messages = Message.getMessages(roomId);
        };
    }
]);

blocChat.factory('Message', ['$firebaseArray',
    function Message($firebaseArray) {
        var ref = firebase.database().ref().child("messages");

        var getMessages = function getMessages(roomId) {
            return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));
        };

        return {
            getMessages: getMessages
        };
    }
]);