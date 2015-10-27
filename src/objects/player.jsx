import Coin from './coin.jsx';

class Player extends Phaser.Sprite {
  constructor(state, x, y) {
    super(state.game, x, y, 'player');
    this.state = state;

    this.speed = 60;

    this.anchor.setTo(.5, .5);
    this.animations.add('walking', [0, 1, 2, 3, 4, 5, 6, 7], 15, true);
    this.animations.add('still', [8, 8, 8, 8, 9, 10, 9, 10, 9, 10, 9], 2, true);

    this.game.physics.enable(this, Phaser.Physics.ARCADE);
    this.body.collideWorldBounds = true;
    this.body.mass = 100;

    this.coins = 10;

    this.play('still');

    var leftKey = this.game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
    var rightKey = this.game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
    var downKey = this.game.input.keyboard.addKey(Phaser.Keyboard.DOWN);

    leftKey.onDown.add(event => {
      if (!this.body.blocked.left)
        this.play('walking');
      else
        this.play('still');

      this.scale.x = -1;
      this.body.velocity.x = -this.speed;
    });
    rightKey.onDown.add(event => {
      if (!this.body.blocked.right)
        this.play('walking');
      else
        this.play('still');
      this.scale.x = 1;
      this.body.velocity.x = this.speed;
    });
    leftKey.onUp.add(event => {
      this.play('still');
      this.body.velocity.x = 0;
    });
    rightKey.onUp.add(event => {
      this.play('still');
      this.body.velocity.x = 0;
    });
    downKey.onDown.add(event => {
      this.dropCoin();
    });
  }

  dropCoin() {
    if (this.coins < 1) return;

    var coin = new Coin(this.game, this.x, this.y);
    this.state.coins.add(coin);
    this.coins -= 1;
  }
}

export default Player;