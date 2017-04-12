var NameModalController = function NameModalController($uibModalInstance) {
  this.ok = function () {
    $uibModalInstance.close(this.username);
  };
}; //- ModalController

angular.module('blocChat')
	.controller('NameModalController', [ '$uibModalInstance', NameModalController ]);