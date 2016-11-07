angular.module('game')
  .controller('CommandKitController', CommandKitController);

CommandKitController.$inject = [];

function CommandKitController() {
  var vm = this;

  vm.drag = drag;

  function drag(ev) {
    console.log(ev);
    console.log('start');
  }

  vm.$onInit = function() {
  }
}
