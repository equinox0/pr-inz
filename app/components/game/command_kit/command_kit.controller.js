angular.module('game')
  .controller('CommandKitController', CommandKitController);

CommandKitController.$inject = ['$rootScope'];

function CommandKitController($rootScope) {
  var vm = this;

  vm.treeOptions = {
    dropped: function() {
      $rootScope.$broadcast('event:editorBlocksChanged');
    }
  }
}
