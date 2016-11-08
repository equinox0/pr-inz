angular.module('game')
  .controller('GameController', GameController);

GameController.$inject = ['$stateParams', 'AppService', '$state'];

function GameController($stateParams, AppService, $state) {
  var vm = this;

  vm.currentLevel = null;
  vm.currentLevelData = null;

  vm.$onInit = function() {
    vm.currentLevel = $stateParams.levelId;

    vm.currentLevelData = AppService.getLevel(vm.currentLevel);
    if(!vm.currentLevelData) {
      $state.go('main');
    }
  }
}
