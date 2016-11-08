angular.module('navbar')
  .controller('NavbarController', NavbarController);

NavbarController.$inject = ['AppService', '$state'];

function NavbarController(AppService, $state) {
  var vm = this;

  vm.levelIds = [];
  vm.state = null;

  vm.$onInit = function() {
    for(var i = 0; i < AppService.getLevelCount(); i++) {
      vm.levelIds.push(i + 1);
    }

    vm.state = $state;
  }
}
