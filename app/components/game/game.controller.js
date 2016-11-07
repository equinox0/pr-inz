angular.module('game')
  .controller('GameController', GameController);

GameController.$inject = ['$stateParams'];

function GameController($stateParams) {
  var vm = this;

  vm.currentLevel = $stateParams.levelId;

  console.log('current level: ', vm.currentLevel);
}
