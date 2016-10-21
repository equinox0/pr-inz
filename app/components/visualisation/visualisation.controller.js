angular.module('visualisation')
  .controller('VisualisationController', VisualisationController);

VisualisationController.$inject = [];

function VisualisationController() {
  var game = new Phaser.Game(360, 360, Phaser.AUTO, 'visualisation-column', {
    preload: preload,
    create: create, update:
    update
  });

  function preload() {
  }

  function create() {
  }

  function update() {
  }
}
