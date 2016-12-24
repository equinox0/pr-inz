angular.module('app')
  .factory('AppService', AppService);

AppService.$inject = [];

function AppService() {
  var _blocks = [
    {
      type: "function",
      name: "goStraight",
      title: "Idź prosto"
    },
    {
      type: "function",
      name: "turnRight",
      title: "Skręc w prawo"
    },
    {
      type: "function",
      name: "turnLeft",
      title: "Skręc w lewo"
    }
  ];

  var _levels = [
    {
      blocks: [
        _blocks[0],
      ],
      visualisationData: {
        playerStartPosition: {
          x: 3,
          y: 5
        },
        playerStartTurn: 'right',
        coinPosition: {
          x: 5,
          y: 5
        }
      }
    },
    {
      blocks: [
        _blocks[0],
        _blocks[1],
        _blocks[2]
      ],
      visualisationData: {
        playerStartPosition: {
          x: 3,
          y: 5
        },
        playerStartTurn: 'right',
        coinPosition: {
          x: 5,
          y: 3
        }
      }
    }
  ];

  function getLevel(num) {
    num = num || 1;
    if(num > _levels.length) return false;
    return _levels[num - 1];
  }

  function getLevelCount() {
    return _levels.length;
  }

  return {
    getLevel: getLevel,
    getLevelCount: getLevelCount
  }
}
