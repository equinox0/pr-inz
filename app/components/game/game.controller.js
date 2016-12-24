angular.module('game')
  .controller('GameController', GameController);

GameController.$inject = ['$stateParams', 'AppService', '$state', '$rootScope', '$uibModal'];

function GameController($stateParams, AppService, $state, $rootScope, $uibModal) {
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

  $rootScope.$on('visualisation:finished', function(event, data) {

    var msg = null;
    if(data === "won") msg = "Brawo, udało Ci się!";
    else msg = "Niestety, nie udało Ci się. Sprobuj jeszcze raz."

    $uibModal.open({
        animation: true,
        backdrop: 'static',
        keyboard: true,
        component: 'infoModal',
        resolve: {
            title: function() {
              return "Wynik";
            },
            msg: function() {
              return msg;
            }
        }
      }
    );
  });
}
