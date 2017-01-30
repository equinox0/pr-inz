angular.module('game')
  .factory("BlockParserService", BlockParserService);

function BlockParserService() {

  function parseBlocksToFuncions(blocks, gameData, mapBoundTiles) {
    var functions = [];
    blocks.map(function(block) {
      switch(block.type) {
        case 'function':
          functions.push(block);
          break;
        case 'iLoop':
          for(var iLoopNumber = 0; iLoopNumber < block.number; iLoopNumber++) {
            functions = functions.concat(parseBlocksToFuncions(block.code, gameData, mapBoundTiles));
          }
      }
    })
    // while(i < blocks.length) {
    //   switch(blocks[i].type) {
    //     case 'function':
    //       functions.push(blocks[i]);
    //       i++;
    //       break;
    //     case 'iLoop':
    //       // for(var iLoopNumber = 0; iLoopNumber < blocks[i].number; iLoopNumber++) {
    //       //   _parseBlocks(blocks[i].code);
    //       // }
    //       i++;
    //       break;
    //     case 'cLoop':
    //       i++;
    //       break;
    //     case 'condition':
    //       i++;
    //       break;
    //   }
    // }
    return functions;
  }

  return {
    parseBlocksToFuncions: parseBlocksToFuncions
  }
}
