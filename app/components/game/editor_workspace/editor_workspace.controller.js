angular.module('game')
  .controller('EditorWorkspaceController', EditorWorkspaceController);

EditorWorkspaceController.$inject = [];

function EditorWorkspaceController() {
  var vm = this;

  vm.blocks;

  vm.removeBlock = removeBlock;

  vm.$onInit = function() {
    vm.blocks = [];
  }

  function removeBlock(index) {
    vm.blocks.splice(index, 1);
  }
}
