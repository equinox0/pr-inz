angular.module("codeBlock")
  .component("conditionalBlock", {
    templateUrl: "./app/shared/code_block/conditional_block/conditional_block.template.html",
    controller: "ConditionalBlockController",
    bindings: {
      block: "<"
    }
  })
