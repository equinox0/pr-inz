angular.module('codeBlock')
  .component('codeBlock', {
    templateUrl: './app/shared/code_block/code_block.template.html',
    controller: 'CodeBlockController',
    bindings: {
      block: '<'
    }
  })
