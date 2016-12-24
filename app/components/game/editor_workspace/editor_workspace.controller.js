angular.module('game')
  .controller('EditorWorkspaceController', EditorWorkspaceController);

EditorWorkspaceController.$inject = ['$rootScope', 'GameService', 'VisualisationService'];

function EditorWorkspaceController($rootScope, GameService, VisualisationService) {
  var vm = this;

  vm.removeBlock = removeBlock;
  vm.treeOptions = {
    accept: function() {
      return !VisualisationService.isRunning();
    }
  }

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
