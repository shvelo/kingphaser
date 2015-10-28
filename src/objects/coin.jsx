class Coin extends Phaser.Sprite {
  constructor(game, x, y) {
    super(game, x, y, 'coin');
    this.animations.add('still', null, 10, true);

    game.physics.enable(this, Phaser.Physics.ARCADE);
    this.body.bounce.y = 0.5;
    this.body.mass = 5;

    this.play('still');
    setTimeout(event => {
      this.canPickUp = true;
    }, 1000);
  }
}

export default Coin;