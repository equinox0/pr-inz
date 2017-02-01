angular.module('game')
  .factory("BlockParserService", BlockParserService);

function BlockParserService() {

  function parseBlocksToFuncions(blocks, gameData, mapBoundTiles) {
    var functions = [];
    blocks.map(function(block) {
      switch(block.type) {
        case 'function':
          if(_updatePosition(gameData, block, mapBoundTiles)) {
            functions.push(block);
          }
          break;
        case 'iLoop':
          for(var iLoopNumber = 0; iLoopNumber < block.number; iLoopNumber++) {
            functions = functions.concat(parseBlocksToFuncions(block.code, gameData, mapBoundTiles));
          }
          break;
        case 'cLoop':
          //bo to sens życia
          var maxReps = 42;
          var rep = 0;
          while(!(gameData.playerPosition.x === gameData.coinPosition.x && gameData.playerPosition.y === gameData.coinPosition.y) && rep <= maxReps) {
            functions = functions.concat(parseBlocksToFuncions(block.code, gameData, mapBoundTiles));
            rep++;
          }
          break;
        case 'condition':
          switch(gameData.playerTurn) {
            case 'up':
              if(gameData.playerPosition.y - 1 === mapBoundTiles.up) {
                functions = functions.concat(parseBlocksToFuncions(block.code, gameData, mapBoundTiles));
              }
              break;
            case 'right':
              if(gameData.playerPosition.x + 1 === mapBoundTiles.right) {
                functions = functions.concat(parseBlocksToFuncions(block.code, gameData, mapBoundTiles));
              }
              break;
            case 'down':
              if(gameData.playerPosition.y + 1 === mapBoundTiles.down) {
                functions = functions.concat(parseBlocksToFuncions(block.code, gameData, mapBoundTiles));
              }
              break;
            case 'left':
              if(gameData.playerPosition.x - 1 === mapBoundTiles.left) {
                functions = functions.concat(parseBlocksToFuncions(block.code, gameData, mapBoundTiles));
              }
              break;
          }
          break;
      }
    })

    return functions;
  }

  function _updatePosition(gameData, block, mapBoundTiles) {
    switch(block.name) {
      case 'goStraight':
        return _goStraight(gameData, mapBoundTiles);
      case 'turnLeft':
        _turnLeft(gameData);
        return true;
      case 'turnRight':
        _turnRight(gameData);
        return true;
    }
  }

  function _goStraight(gameData, mapBoundTiles) {
    switch(gameData.playerTurn) {
      case 'up':
        if(gameData.playerPosition.y - 1 > mapBoundTiles.up) {
          gameData.playerPosition.y--;
          return true;
        }
        return false;
      case 'right':
        if(gameData.playerPosition.x + 1 < mapBoundTiles.right) {
          gameData.playerPosition.x++;
          return true;
        }
        return false;
      case 'down':
        if(gameData.playerPosition.y + 1 < mapBoundTiles.down) {
          gameData.playerPosition.y++;
          return true;
        }
        return false;
      case 'left':
        if(gameData.playerPosition.x - 1 > mapBoundTiles.left) {
          gameData.playerPosition.x--;
          return true;
        }
        return false;
    }
  }

  function _turnLeft(gameData) {
    switch(gameData.playerTurn) {
      case 'up':
        gameData.playerTurn = 'left';
        break;
      case 'right':
        gameData.playerTurn = 'up';
        break;
      case 'down':
        gameData.playerTurn = 'right';
        break;
      case 'left':
        gameData.playerTurn = 'down';
        break;
    }
  }

  function _turnRight(gameData) {
    switch(gameData.playerTurn) {
      case 'up':
        gameData.playerTurn = 'right';
        break;
      case 'right':
        gameData.playerTurn = 'down';
        break;
      case 'down':
        gameData.playerTurn = 'left';
        break;
      case 'left':
        gameData.playerTurn = 'up';
        break;
    }
  }

  return {
    parseBlocksToFuncions: parseBlocksToFuncions
  }
}
