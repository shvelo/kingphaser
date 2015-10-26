class Player extends Phaser.Sprite {
  constructor(game, x, y) {
    super(game, x, y, 'player');
    this.anchor.setTo(.5,.5);
    this.animations.add('walking', [0, 1, 2, 3, 4, 5, 6, 7], 10, true);
    this.animations.add('still', [8, 8, 8, 9, 10], 2, true);
    this.play('still');
    
    var leftKey = this.game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
    var rightKey = this.game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
    var self = this;

    leftKey.onDown.add(function () {
      self.play('walking');
      self.scale.x = -1;
    });
    rightKey.onDown.add(function () {
      self.play('walking');
      self.scale.x = 1;
    });
    leftKey.onUp.add(function () {
      self.play('still');
    });
    rightKey.onUp.add(function () {
      self.play('still');
    });
  }

  update() {
  }
}

export default Player