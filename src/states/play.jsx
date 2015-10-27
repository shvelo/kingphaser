import Player from '../objects/player.jsx';

class PlayState extends Phaser.State {
  preload() {
    this.load.spritesheet("player", "assets/gfx/king.png", 64, 64);
    this.load.spritesheet("coin", "assets/gfx/coin.png", 10, 10);
    this.load.image("ground", "assets/gfx/tiles.png");
  }

  create() {
    this.game.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
    this.stage.smoothed = false;

    this.physics.startSystem(Phaser.Physics.ARCADE);
    this.physics.arcade.gravity.y = 1000;

    this.stage.backgroundColor = "#E0F7FA";

    this.player = new Player(this, this.world.centerX, this.world.centerY);
    this.add.existing(this.player);

    this.ground = this.add.sprite(0, this.world.height - 60, "ground");
    this.physics.enable(this.ground, Phaser.Physics.ARCADE);
    this.ground.body.immovable = true;
    this.ground.body.allowGravity = false;

    this.coins = this.add.group();
    this.physics.enable(this.coins, Phaser.Physics.ARCADE);
  }

  update() {
    this.physics.arcade.collide(this.player, this.ground);
    this.physics.arcade.collide(this.coins, this.ground);
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