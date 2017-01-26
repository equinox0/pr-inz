angular.module("codeBlock")
  .controller("ILoopBlockController", ILoopBlockController);

function ILoopBlockController() {
  var vm = this;

  vm.$onInit = function() {
    vm.isCommadKit = !vm.codeBlockCtrl.block.number;
    vm.numbers = [];
    for(var i = 1; i <= 9; i++) {
      vm.numbers.push(i);
    }
    vm.number = vm.numbers[0]
    vm.codeBlockCtrl.block.number = vm.number;
  }
}
