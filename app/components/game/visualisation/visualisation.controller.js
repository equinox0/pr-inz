angular.module('game')
  .controller('VisualisationController', VisualisationController);

VisualisationController.$inject = ['VisualisationService'];

function VisualisationController(VisualisationService) {
  var vm = this;

  vm.game = null;
  vm.isRunning = null;

  vm.startVisualisation = startVisualisation;
  vm.resetVisualisation = resetVisualisation;

  vm.$onInit = function() {
    vm.isRunning = false;

    VisualisationService.setInitData(vm.initData);
    vm.game = new Phaser.Game(320, 320, Phaser.CANVAS, 'visualisation-column', {
     preload: VisualisationService.preload,
     create: VisualisationService.create,
     update: VisualisationService.update
    });
  }

  function startVisualisation() {
    vm.isRunning = true;
    VisualisationService.startGame();
  }

  function resetVisualisation() {
    vm.isRunning = false;
    VisualisationService.resetGame();
  }
}
