angular.module('app')
  .controller('AppController', AppController);

AppController.$inject = ['AppService', '$scope'];

function AppController(AppService, $scope) {
  var vm = this;

  $scope.$on('App:loaded', function() {
    vm.isLoaded = true;
  })

  $scope.$on('App:notLoaded', function() {
    vm.isError = true;
  })
}
