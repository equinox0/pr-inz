angular.module('game')
  .controller('GameController', GameController);

GameController.$inject = ['$stateParams', 'AppService', '$state', '$rootScope', '$uibModal'];

function GameController($stateParams, AppService, $state, $rootScope, $uibModal) {
  var vm = this;

  vm.currentLevel = null;
  vm.currentLevelData = null;
  vm.levelCount = null;
  var infoModalInstance = null;

  vm.$onInit = function() {
    vm.currentLevel = $stateParams.levelId;
    vm.levelCount = AppService.getLevelCount();

    if(vm.currentLevel > vm.levelCount) {
      $state.go('main');
    } else {
      vm.currentLevelData = AppService.getLevel(vm.currentLevel);

      if(!!vm.currentLevelData.levelInfo) {
        infoModalInstance = $uibModal.open({
            animation: true,
            backdrop: 'static',
            keyboard: true,
            component: 'infoModal',
            resolve: {
                title: function() {
                  return "Instrukcja";
                },
                msg: function() {
                  return vm.currentLevelData.levelInfo;
                }
            }
          });
      }
    }
  }

  vm.$onDestroy = function() {
    if(infoModalInstance) {
      infoModalInstance.close();
      infoModalInstance = null;
    }
  }

  $rootScope.$on('visualisation:finished', function(event, data) {

    var msg = null;
    if(data === "won") msg = "Brawo, udało Ci się!";
    else msg = "Niestety, nie udało Ci się. Sprobuj jeszcze raz."

    infoModalInstance = $uibModal.open({
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
    ).closed.then(function() {
      if(data === "won") {
        if(vm.currentLevel < vm.levelCount) {
          $state.go('game.level', {levelId: (Number(vm.currentLevel) + 1)});
        } else {
          infoModalInstance = $uibModal.open({
              animation: true,
              backdrop: 'static',
              keyboard: true,
              component: 'infoModal',
              resolve: {
                  title: function() {
                    return "Gratulacje!";
                  },
                  msg: function() {
                    return "Brawo, udało Ci się przejśc wszystkie poziomy!";
                  }
              }
            }
          )
        }
      }
      infoModalInstance = null;
    })
  });
}
