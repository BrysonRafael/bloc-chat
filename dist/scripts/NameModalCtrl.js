var NameModalController = function NameModalController($uibModalName) {
  this.ok = function () {
    $uibModalInstance.close(this.currentUser);
  };
}; //- ModalController

angular.module('blocChat')
	.controller('NameModalController', [ '$uibModalName', NameModalController ]);