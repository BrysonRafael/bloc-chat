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

var blocChat = angular
    .module('blocChat', ['ui.router', 'ui.bootstrap', 'firebase', 'ngCookies'])
    .config(config);

blocChat.controller('RoomController', ['$state', 'Room', 'Message', '$uibModal', '$cookies',
    function($state, Room, Message, $uibModal, $cookies) {
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
            this.roomId = roomId;
            this.messages = Message.getMessages(roomId);
        };

        this.send = function(message) {
            var newMessage = {
                roomId: this.roomId,
                message: message,
                user: $cookies.get('blocChatCurrentUser')
            };

            this.messages = Message.send(newMessage);
            this.messageText = '';
        };
    }
]);

blocChat.factory('Message', ['$firebaseArray',
    function Message($firebaseArray) {
        var ref = firebase.database().ref().child('messages');

        var getMessages = function getMessages(roomId) {
            return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));
        };

        return {
            getMessages: getMessages,
            getByRoomId: function (roomId) {
            // .. logic for filtering messages
                return getMessages(roomId);
            },
            send: function(newMessage) {
            // Send method logic
                getMessages(newMessage.roomId).$add(newMessage);
                return getMessages(newMessage.roomId);
            }
        };
    }
]);