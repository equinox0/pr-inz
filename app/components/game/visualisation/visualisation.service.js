angular.module('game')
  .factory('VisualisationService', VisualisationService);

VisualisationService.$inject = ['TILE_SIZE'];

function VisualisationService(TILE_SIZE) {

  var _player = null;
  var _coin = null;

  var _initData = null;

  function setInitData(data) {
    _initData = data;
  }

  function preload() {
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
      // TODO: !
  }

  function _countPositionOfTile(n) {
    return (n * TILE_SIZE) + TILE_SIZE / 2;
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

  return {
    setInitData: setInitData,
    preload: preload,
    create: create,
    update: update
  }
}
