angular.module('game')
  .controller('VisualisationController', VisualisationController);

VisualisationController.$inject = ['VisualisationService', '$rootScope'];

function VisualisationController(VisualisationService, $rootScope) {
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

  vm.$onDestroy = function() {
    VisualisationService.stopGame();
    VisualisationService.resetGame();
  }

  $rootScope.$on('visualisation:finished', function(event, data) {
    console.log(data);
  })

  function startVisualisation() {
    vm.isRunning = true;
    VisualisationService.startGame();
  }

  function resetVisualisation() {
    vm.isRunning = false;
    VisualisationService.stopGame();
    VisualisationService.resetGame();
  }
}
