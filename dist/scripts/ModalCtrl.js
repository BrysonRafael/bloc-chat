var ModalController = function ModalController($uibModalInstance) {
  this.ok = function () {
    $uibModalInstance.close(this.roomName);
  };

  this.cancel = function () {
    $uibModalInstance.dismiss(false);
  };
}; //- ModalController

angular.module('blocChat')
	.controller('ModalController', [ '$uibModalInstance', ModalController ]);