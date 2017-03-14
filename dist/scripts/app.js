var blocChat = angular.module('blocChat', [ 'ui.router', 'firebase' ]);

(function() {
	function config($stateProvider, $locationProvider) {
		$locationProvider
			.html5({
				enabled: true,
				requireBase: false
			});

		$stateProvider
			.state('home', {
				url: '/',
				templateUrl: '/templates/home.html'
			})
	}

	angular
		.module('blocChat', ['ui.router'])
		.config(config);
})

blocChat.controller('RoomController', ['$state', '$firebaseArray', function ($state, $firebaseArray) {
	var ref = firebase.database().ref();
	var roomList = $firebaseArray(ref);


	$state.list = roomList;
}])

