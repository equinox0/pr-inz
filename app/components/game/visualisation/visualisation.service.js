angular.module('game')
  .factory('VisualisationService', VisualisationService);

VisualisationService.$inject = ['TILE_SIZE', 'GameService'];

function VisualisationService(TILE_SIZE, GameService) {
  /**
  * Obiekt gry
  */
  var _game = null;
  /**
  * Obiekty elementow znajdujacych sie w grze (gracza - samochod, oraz monety - celu)
  */
  var _player = null;
  var _coin = null;
  /**
  * Dane potrzebne do ustawienia mapy gry:
  * Połozenie gracza, zwrot oraz polozenie monety
  */
  var _initData = null;
  /**
  * Czas opoznienia pomiedzy kolejnymi wykonaniami petli gry oraz timestamp sprawdzajacy czy czas juz minal
  */
  var _updateDelay = 800;
  var _timeCheck = null;
  /**
  * Flaga okreslajaca czy animacja ma sie wykonywac
  */
  var _isRunning = false;
  /**
  * DO TESTOW
  */
  var mockArray = [
    _turnLeft,
    _goStraight,
    _turnRight,
    _goStraight,
    _goStraight,
    _turnLeft,
    _goStraight
  ];
  /**
  * Aktualny indeks bloku, ktory ma sie wykonywac
  */
  var currentIndex = 0;

  /**
   * Wprowadza wstępne dane gry do serwisu.
   * @param {object} data dane poziomu w formacie JSON
   */
  function setInitData(data) {
    _initData = data;
  }

  /**
   * Resetuje poziom do wartości początkowych.
   */
  function resetGame() {
    currentIndex = 0;
    _player.position.x = _countPositionOfTile(_initData.playerStartPosition.x);
    _player.position.y = _countPositionOfTile(_initData.playerStartPosition.y);
    _player.angle = _getAngleOfTurn(_initData.playerStartTurn);
  }

  /**
   * Rozpoczyna działanie animacji.
   */
  function startGame() {
    console.log(GameService.getBlocks());
    _isRunning = true;
  }

  /**
   * Wyłącza działanie animacji.
   */
  function stopGame() {
    _isRunning = false;
  }

  function preload() {
    _game = this;
    // Loads map
    this.load.tilemap('map', './app/components/game/visualisation/assets/base_map.json', null, Phaser.Tilemap.TILED_JSON);
    this.load.image('terrain', './app/components/game/visualisation/assets/terrain.png');

    // Loads coin sprite
    this.load.spritesheet('coin', './app/components/game/visualisation/assets/coin_gold.png', TILE_SIZE, TILE_SIZE);

    // Loads character sprite
    this.load.spritesheet('player', './app/components/game/visualisation/assets/car.png');
  }

  function create() {
    this.map = this.add.tilemap('map');
    this.map.addTilesetImage('terrain', 'terrain');

    this.layer = this.map.createLayer('Ground');

    _coin = this.add.sprite(_countPositionOfTile(_initData.coinPosition.x),
                            _countPositionOfTile(_initData.coinPosition.y),
                            'coin', 0);
    _coin.anchor.set(0.5);
    _coin.animations.add('rotate', null, 15, true);
    _coin.play('rotate');

    _player = this.add.sprite(_countPositionOfTile(_initData.playerStartPosition.x),
                              _countPositionOfTile(_initData.playerStartPosition.y),
                              'player');
    _player.anchor.set(0.5);
    _player.angle = _getAngleOfTurn(_initData.playerStartTurn);
  }

  function update() {
    if(_isRunning) {
      _timeCheck = _timeCheck || this.time.now;
      if( (this.time.now - _timeCheck) > _updateDelay) {
        if(currentIndex < mockArray.length) {
          mockArray[currentIndex]();

          currentIndex++;
        } else if(currentIndex == mockArray.length) {
          console.log('finish');
        }
        _timeCheck = this.time.now;
      }
    }
  }

  function _countPositionOfTile(n) {
    return (n * TILE_SIZE) + TILE_SIZE / 2;
  }

  function _countTileFromPosition(n) {
    return (n - TILE_SIZE / 2) / TILE_SIZE;
  }

  function _getAngleOfTurn(turn) {
    switch(turn) {
      case 'left':
        return 270;
      case 'down':
        return 180;
      case 'right':
        return 90;
      case 'up':
      default:
        return 0;
    }
  }

  // funkcję odpowiadające blokom kodu

  function _goStraight() {
    var speed = 150;
    switch(_player.angle) {
      case 0:
        console.log('up');
        _game.add.tween(_player).to( { y: _player.y - TILE_SIZE }, 150, "Linear", true);
        break;
      case 90:
        console.log('right');
        _game.add.tween(_player).to( { x: _player.x + TILE_SIZE }, 150, "Linear", true);
        break;
      case -90:
        console.log('left');
        _game.add.tween(_player).to( { x: _player.x - TILE_SIZE }, 150, "Linear", true);
        break;
      case 180:
      case -180:
        console.log('down');
        _game.add.tween(_player).to( { y: _player.y + TILE_SIZE }, 150, "Linear", true);
        break;
    }
  }

  function _turnLeft() {
    _game.add.tween(_player).to( { angle: _player.angle - 90 }, 150, "Linear", true);
  }

  function _turnRight() {
    _game.add.tween(_player).to( { angle: _player.angle + 90 }, 150, "Linear", true);
  }

  return {
    setInitData: setInitData,
    resetGame: resetGame,
    startGame: startGame,
    stopGame: stopGame,
    preload: preload,
    create: create,
    update: update
  }
}
