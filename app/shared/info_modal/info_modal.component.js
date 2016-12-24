angular.module('infoModal')
  .component('infoModal', {
    templateUrl: 'app/shared/info_modal/info_modal.template.html',
    controller: 'InfoModalController',
    bindings: {
      resolve: '<',
      close: '&',
      dismiss: '&'
    }
  })
