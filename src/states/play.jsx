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

    this.physics.startSystem(Phaser.Physics.ARCADE);
    this.physics.arcade.gravity.y = 1000;

    this.map = this.add.tilemap("testmap");
    this.map.setCollisionByExclusion([]);
    this.map.addTilesetImage("tiles", "tiles");
    this.groundLayer = this.map.createLayer("layer1");
    this.groundLayer.resizeWorld();

    window.map = this.map;

    this.stage.backgroundColor = "#E0F7FA";

    var playerObj = _.findWhere(this.map.objects.objects, { name: "player" });

    this.player = new Player(this, playerObj.x, playerObj.y);
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