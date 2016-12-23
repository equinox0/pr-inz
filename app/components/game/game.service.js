angular.module('game')
  .factory('GameService', GameService);

GameService.$inject = [];

function GameService() {
  var _blocks = [];

  function setBlocks(blocks) {
    _blocks = blocks;
  }

  function getBlocks() {
    return _blocks;
  }

  return {
    setBlocks: setBlocks,
    getBlocks: getBlocks
  }
}
