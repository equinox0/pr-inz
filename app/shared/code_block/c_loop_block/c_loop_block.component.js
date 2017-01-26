angular.module("codeBlock")
  .component("cLoopBlock", {
    templateUrl: "./app/shared/code_block/c_loop_block/c_loop_block.template.html",
    controller: "CLoopBlockController",
    bindings: {
      block: "<"
    }
  })
