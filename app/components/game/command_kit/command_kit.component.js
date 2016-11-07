angular.module('game')
  .component('commandKit', {
    templateUrl: './app/components/game/command_kit/command_kit.template.html',
    controller: 'CommandKitController',
    bindings: {
      blocks: '<'
    }
  })
