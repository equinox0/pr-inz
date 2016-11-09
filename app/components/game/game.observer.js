angular.module('game')
  .factory('GameObserver', GameObserver);

GameObserver.$inject = [];

function GameObserver() {

  var _blocks = [];
  var _observers = [];

  function setBlocks(blocks) {
    _blocks = blocks;
    notifyObservers();
  }

  function getBlocks() {
    return _blocks;
  }

  function resetBlocks() {
    _blocks = []
    notifyObservers();
  }

  function attachObserver(id, callback) {
    _observers.push({id: id, callback: callback});
  }

  function detachObserver(id) {
    for(var i in _observers) {
      if(id === _observers[i].id) {
        _observers.splice(i, 1);
        return;
      }
    }
  }

  function notifyObservers() {
    for(var i in _observers) {
      _observers[i].callback();
    }
  }

  return {
    setBlocks: setBlocks,
    getBlocks: getBlocks,
    resetBlocks: resetBlocks,
    attachObserver: attachObserver,
    detachObserver: detachObserver,
  }
}
