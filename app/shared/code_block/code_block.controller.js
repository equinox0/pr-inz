angular.module('codeBlock')
  .controller('CodeBlockController', CodeBlockController);

CodeBlockController.$inject = [];

function CodeBlockController() {
  var vm = this;

  vm.$onInit = function() {
    //testowe
    vm.block = {
      type: "function",
      name: "goStraight",
      title: "Idź prosto"
    }
  }
}
