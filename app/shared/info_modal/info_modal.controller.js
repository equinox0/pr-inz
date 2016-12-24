angular.module('infoModal')
  .controller('InfoModalController', InfoModalController);

function InfoModalController() {
  var vm = this;

  vm.ok = ok;

  vm.$onInit = function() {
    vm.msg = vm.resolve.msg || "Brak treści.";
    vm.title = vm.resolve.title || "Błąd";
  }

  function ok() {
    vm.close();
  }
}
