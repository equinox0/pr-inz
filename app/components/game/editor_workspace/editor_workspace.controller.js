angular.module('game')
  .controller('EditorWorkspaceController', EditorWorkspaceController);

EditorWorkspaceController.$inject = ['$scope', 'GameService', 'VisualisationService'];

function EditorWorkspaceController($scope, GameService, VisualisationService) {
  var vm = this;

  vm.removeBlock = removeBlock;
  vm.treeOptions = {
    accept: function() {
      return !VisualisationService.isRunning();
    }
  }

  $scope.$on('event:editorBlocksChanged', _updateBlocks);

  vm.$onInit = function() {
    vm.blocks = [];
    GameService.setBlocks(vm.blocks);
  }

  function removeBlock(index) {
    if(!VisualisationService.isRunning()) {
      vm.blocks.splice(index, 1);
      _updateBlocks();
    }
  }

  function _updateBlocks() {
    GameService.setBlocks(vm.blocks);
  }
}
