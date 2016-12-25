angular.module('game')
  .controller('GameController', GameController);

GameController.$inject = ['$stateParams', 'AppService', '$state', '$rootScope', '$uibModal', '$timeout'];

function GameController($stateParams, AppService, $state, $rootScope, $uibModal, $timeout) {
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
        $timeout(function() {
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
        }, 800);
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
    if(data === "won") msg = '<div class="alert alert-success" role="alert">'
      + '<span class="glyphicon glyphicon-thumbs-up" aria-hidden="true"></span>'
      + ' Gratuluje, udało Ci się.'
      + '<p>Wciśnij przycisk <strong>OK</strong> aby przejśc do kolejnego poziomu.</p>'
      + '</div>';
    else msg = '<div class="alert alert-danger" role="alert">'
      + '<span class="glyphicon glyphicon-thumbs-down" aria-hidden="true"></span>'
      + ' Niestety, nie udało Ci się.'
      + '<p>Wciśnij przycisk <strong>Zresetuj!</strong> i sprobuj ponownie.</p>'
      + '</div>';

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

            $timeout(function() {
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
          }, 400);
          }
        }
        infoModalInstance = null;
      })
  });
}
