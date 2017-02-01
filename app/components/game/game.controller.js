angular.module('game')
  .controller('GameController', GameController);

GameController.$inject = ['$stateParams', 'AppService', '$state', '$scope', '$uibModal', '$timeout', 'Notification'];

function GameController($stateParams, AppService, $state, $scope, $uibModal, $timeout, Notification) {
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

  $scope.$on('visualisation:finished', function(event, data) {
    if(data === "won") {
      Notification.success({message: '<span class="glyphicon glyphicon-thumbs-up" aria-hidden="true"></span>'
        + ' Gratuluje, udało Ci się.'
        + '<p>Wciśnij przycisk <strong>OK</strong> aby przejśc do kolejnego poziomu.</p>', title: 'Wynik'});

        $timeout(function() {
          if(vm.currentLevel < vm.levelCount) {
              $state.go('game.level', {levelId: (Number(vm.currentLevel) + 1)});
            } else {
              Notification.success({message: '<h4>Brawo, udało Ci się przejśc wszystkie poziomy!</h4>', title: 'Gratulacje!'});
            }
        }, 600)

      } else {
        Notification.error({message: '<span class="glyphicon glyphicon-thumbs-down" aria-hidden="true"></span>'
          + ' Niestety, nie udało Ci się.'
          + '<p>Wciśnij przycisk <strong>Zresetuj!</strong> i sprobuj ponownie.</p>', title: 'Wynik'});
      }
  });
}
