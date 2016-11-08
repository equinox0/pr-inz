angular.module('app')
  .controller('AppController', AppController);

AppController.$inject = ['AppService'];

function AppController(AppService) {
  var vm = this;
}
