import Player from '../objects/player.jsx'

class PlayState extends Phaser.State {
  preload() {
    this.load.spritesheet("player", "assets/gfx/king.png", 64, 64);
    this.load.spritesheet("coin", "assets/gfx/coin.png", 10, 10);
    this.load.image("ground", "assets/gfx/tiles.png");
  }

  create() {
    this.physics.startSystem(Phaser.Physics.ARCADE);
    this.physics.arcade.gravity.y = 100;

    this.player = new Player(this.game, this.world.centerX, this.world.centerY);
    this.add.existing(this.player);

    this.ground = this.add.sprite(0, this.world.height - 60, "ground");
    this.physics.enable(this.ground, Phaser.Physics.ARCADE);
    this.ground.body.immovable = true;
    this.ground.body.allowGravity = false;
  }

  update() {
    this.physics.arcade.collide(this.player, this.ground);
  }
}

export default PlayState;