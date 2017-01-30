angular.module("codeBlock")
  .controller("ILoopBlockController", ILoopBlockController);

ILoopBlockController.$inject = ['VisualisationService', '$rootScope'];

function ILoopBlockController(VisualisationService, $rootScope) {
  var vm = this;

  vm.isEditable = isEditable;
  vm.numberChanged = numberChanged;

  vm.$onInit = function() {
    vm.isCommadKit = !vm.codeBlockCtrl.block.number;
    vm.numbers = [];
    for(var i = 1; i <= 9; i++) {
      vm.numbers.push(i);
    }
    vm.number = vm.numbers[0];
    vm.codeBlockCtrl.block.number = vm.number;
  }

  function isEditable() {
    return !VisualisationService.isRunning();
  }

  function numberChanged() {
    vm.codeBlockCtrl.block.number = vm.number;
    $rootScope.$broadcast('event:editorBlocksChanged');
  }
}
