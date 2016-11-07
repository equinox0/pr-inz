angular.module('app')
  .controller('AppController', AppController);

AppController.$inject = ['AppService'];

function AppController(AppService) {
  var vm = this;

  vm.level = null;

  vm.$onInit = function() {
    vm.level = AppService.getLevel();
  }
}
