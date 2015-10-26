class Player extends Phaser.Sprite {
  constructor(game, x, y) {
    super(game, x, y, 'player');
    this.anchor.setTo(.5,.5);
    this.animations.add('walking', [0, 1, 2, 3, 4, 5, 6, 7], 10, true);
    this.animations.add('still', [8, 8, 8, 9, 10], 2, true);

    game.physics.enable(this, Phaser.Physics.ARCADE);

    this.play('still');
    
    var leftKey = this.game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
    var rightKey = this.game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);

    leftKey.onDown.add(event => {
      this.play('walking');
      this.scale.x = -1;
      this.body.velocity.x = -100;
    });
    rightKey.onDown.add(event => {
      this.play('walking');
      this.scale.x = 1;
      this.body.velocity.x = 100;
    });
    leftKey.onUp.add(event => {
      this.play('still');
      this.body.velocity.x = 0;
    });
    rightKey.onUp.add(event => {
      this.play('still');
      this.body.velocity.x = 0;
    });
  }

  update() {
  }
}

export default Player