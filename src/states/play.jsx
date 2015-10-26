import Player from '../objects/player.jsx'

class PlayState extends Phaser.State {
  preload() {
    this.load.spritesheet("player", "assets/gfx/king.png", 64, 64);
  }

  create() {
    this.physics.startSystem(Phaser.Physics.ARCADE);

    var player = new Player(this.game, this.world.centerX, this.world.centerY);
    this.add.existing(player);
  }
}

export default PlayState;