var blocChat = angular.module('blocChat', [ 'ui.router', 'firebase' ]);

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

angular
	.module('blocChat')
	.config(config);

blocChat.controller('RoomController', ['$state', 'Room', function ($state, Room) {
	this.rooms = Room.all;
	
}])

