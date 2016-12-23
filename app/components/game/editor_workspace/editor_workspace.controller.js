angular.module('game')
  .controller('EditorWorkspaceController', EditorWorkspaceController);

EditorWorkspaceController.$inject = ['$rootScope', 'GameService'];

function EditorWorkspaceController($rootScope, GameService) {
  var vm = this;

  vm.removeBlock = removeBlock;

  $rootScope.$on('event:editorBlocksChanged', _updateBlocks);

  vm.$onInit = function() {
    vm.blocks = [];
    GameService.setBlocks(vm.blocks);
  }

  function removeBlock(index) {
    vm.blocks.splice(index, 1);
    _updateBlocks();
  }

  function _updateBlocks() {
    GameService.setBlocks(vm.blocks);
  }
}
