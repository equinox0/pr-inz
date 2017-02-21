angular.module('app')
  .factory('AppService', AppService);

AppService.$inject = ['$http', '$rootScope'];

function AppService($http, $rootScope) {

  var _blocks = null,
      _levels = null;
      _levelsCount = 0;

  $http.get('./app/blocks.json')
    .then(function(data) {
      _blocks = data.data;
      $http.get('./app/levels.json')
        .then(function(data) {
          _levels = data.data;
          for(var level in _levels) {
            for(var block in _levels[level].blocks) {
              _levels[level].blocks[block] = _blocks[_levels[level].blocks[block]];
            }
            _levelsCount++;
          }
          $rootScope.$broadcast('App:loaded')
        }, function() {
          $rootScope.$broadcast('App:notLoaded')
        })
    }, function() {
      $rootScope.$broadcast('App:notLoaded')
    })


  function getLevel(num) {
    num = num || 1;
    if(num > _levelsCount) return false;
    return _levels[num];
  }

  function getLevelCount() {
    return _levelsCount;
  }

  function getLevelTitle(num) {
    if(!Number(num) || num < 1 || num > _levelsCount) return false;
    return _levels[num].title;
  }

  return {
    getLevel: getLevel,
    getLevelCount: getLevelCount,
    getLevelTitle: getLevelTitle
  }
}
