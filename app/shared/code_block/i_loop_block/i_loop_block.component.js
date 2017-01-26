angular.module("codeBlock")
  .component("iLoopBlock", {
    templateUrl: "./app/shared/code_block/i_loop_block/i_loop_block.template.html",
    controller: "ILoopBlockController",
    bindings: {
      block: "<"
    },
    require: {
      codeBlockCtrl: "^codeBlock"
    }
  })
