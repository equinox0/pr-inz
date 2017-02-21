angular.module('navbar')
  .controller('NavbarController', NavbarController);

NavbarController.$inject = ['AppService', '$state'];

function NavbarController(AppService, $state) {
  var vm = this;

  vm.getLevelTitle = getLevelTitle;

  vm.$onInit = function() {
    vm.levelIds = [];
    for(var i = 0; i < AppService.getLevelCount(); i++) {
      vm.levelIds.push(i + 1);
    }

    vm.state = $state;
  }

  function getLevelTitle(num) {
    return AppService.getLevelTitle(num) || "Poziom"
  }
}
