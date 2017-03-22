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
	.module('blocChat', [ 'ui.router', 'ui.bootstrap', 'firebase' ])
	.config(config);

blocChat.controller('RoomController', ['$state', 'Room', '$uibModal', 
	function ($state, Room, $uibModal) {
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
	}
]);

