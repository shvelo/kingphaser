import MenuState from './states/menu.jsx';
import PlayState from './states/play.jsx';

class Game extends Phaser.Game {
  constructor() {
    super(480, 320, Phaser.AUTO, 'game');
    window.game = this;

    this.antialias = false;

    this.state.add('menu', MenuState);
    this.state.add('play', PlayState);

    this.state.start('play');
  }
}

new Game();