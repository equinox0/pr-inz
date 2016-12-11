angular.module('game')
  .controller('VisualisationController', VisualisationController);

VisualisationController.$inject = ['VisualisationService'];

function VisualisationController(VisualisationService) {
  var vm = this;

  var game = null;

  vm.startVisualisation = startVisualisation;

  vm.$onInit = function() {
    VisualisationService.setInitData(vm.initData);

    game = new Phaser.Game(320, 320, Phaser.CANVAS, 'visualisation-column', {
     preload: VisualisationService.preload,
     create: VisualisationService.create,
     update: VisualisationService.update
    });
  }

  function startVisualisation() {
    console.log('TODO: Start Visualisation');
  }
}
