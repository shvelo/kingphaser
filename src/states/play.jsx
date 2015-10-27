import Player from '../objects/player.jsx';

class PlayState extends Phaser.State {
  preload() {
    this.load.spritesheet("player", "assets/gfx/king.png", 64, 64);
    this.load.spritesheet("coin", "assets/gfx/coin.png", 10, 10);
    this.load.image("tiles", "assets/gfx/tiles.png");
    this.load.tilemap("testmap", "assets/maps/test.json", null, Phaser.Tilemap.TILED_JSON);
  }

  create() {
    this.game.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
    this.stage.smoothed = false;
    this.game.renderer.renderSession.roundPixels = true;

    var map = this.add.tilemap("testmap");
    map.setCollisionByExclusion([]);
    map.addTilesetImage("tiles", "tiles");
    this.groundLayer = map.createLayer("layer1");
    this.groundLayer.resizeWorld();

    this.physics.startSystem(Phaser.Physics.ARCADE);
    this.physics.arcade.gravity.y = 1000;

    this.stage.backgroundColor = "#E0F7FA";

    this.player = new Player(this, 0, 0);
    this.add.existing(this.player);

    this.camera.follow(this.player, Phaser.Camera.FOLLOW_PLATFORMER);

    this.coins = this.add.group();
    this.physics.enable(this.coins, Phaser.Physics.ARCADE);
  }

  update() {
    this.physics.arcade.collide(this.player, this.groundLayer);
    this.physics.arcade.collide(this.coins, this.groundLayer);
    this.physics.arcade.overlap(this.player, this.coins, function (player, coin) {
      if(coin.canPickUp) {
        coin.kill();
        player.coins += 1;
      }
    });

    this.game.debug.text(this.player.coins, this.world.width - 30, 20, "black", "16px sans-serif");
  }
}

export default PlayState;