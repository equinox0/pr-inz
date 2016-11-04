angular.module('visualisation')
  .factory('VisualisationService', VisualisationService);

VisualisationService.$inject = ['TILE_SIZE'];

function VisualisationService(TILE_SIZE) {

  var player = null;
  var coin = null;

  function preload() {
    // Loads map
    this.load.tilemap('map', './app/components/visualisation/assets/base_map.json', null, Phaser.Tilemap.TILED_JSON);
    this.load.image('terrain', './app/components/visualisation/assets/terrain.png');

    // Loads coin sprite
    this.load.spritesheet('coin', './app/components/visualisation/assets/coin_gold.png', 32, 32);

    // Loads character sprite
    this.load.spritesheet('player', './app/components/visualisation/assets/car.png');
  }

  function create() {
    this.map = this.add.tilemap('map');
    this.map.addTilesetImage('terrain', 'terrain');

    this.layer = this.map.createLayer('Ground');

    coin = this.add.sprite(_countPositionOfTile(1), _countPositionOfTile(1), 'coin', 0);
    coin.anchor.set(0.5);
    coin.animations.add('rotate', null, 15, true);
    coin.play('rotate');

    player = this.add.sprite(_countPositionOfTile(1), _countPositionOfTile(2), 'player');
    player.anchor.set(0.5);
  }

  function update() {
      player.angle += 1;
  }

  function _countPositionOfTile(n) {
    return (n * TILE_SIZE) + TILE_SIZE / 2;
  }

  return {
    preload: preload,
    create: create,
    update: update
  }
}
