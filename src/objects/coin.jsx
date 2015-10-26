class Coin extends Phaser.Sprite {
  constructor(game, x, y) {
    super(game, x, y, 'coin');
    this.animations.add('still', null, 60, true);

    game.physics.enable(this, Phaser.Physics.ARCADE);

    this.play('still');

    this.body.velocity.y = 100;
  }
}

export default Coin