function BlocChatCookies($cookies, $uibModal) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    if (!currentUser || currentUser === '') {
      var setUsername = $uibModal.open({
        // Modal configuration object properties
        templateUrl: '/templates/NameModal.html',
        controller: 'NameModalController',
        controllerAs: 'modal'
      });

      setUsername.result.then(function (currentUser) {
        $cookies.put('blocChatCurrentUser', currentUser);
      })
    }
  }

  angular.module('blocChat').run(['$cookies', '$uibModal', BlocChatCookies]);