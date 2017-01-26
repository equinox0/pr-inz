angular.module("codeBlock")
  .component("functionBlock", {
    templateUrl: "./app/shared/code_block/function_block/function_block.template.html",
    controller: "FunctionBlockController",
    bindings: {
      block: "<"
    }
  })
