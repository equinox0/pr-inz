angular.module('visualisation')
  .controller('VisualisationController', VisualisationController);

VisualisationController.$inject = ['VisualisationService'];

function VisualisationController(VisualisationService) {
  var vm = this;

  var game = null;

  vm.startVisualisation = startVisualisation;

  vm.$onInit = function() {
    new Phaser.Game(320, 320, Phaser.AUTO, 'visualisation-column', {
     preload: VisualisationService.preload,
     create: VisualisationService.create,
     update: VisualisationService.update
    });
  }

  function startVisualisation() {
    console.log('TODO: Start Visualisation');
  }
}
