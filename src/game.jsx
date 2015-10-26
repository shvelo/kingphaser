import MenuState from './states/menu.jsx'
import PlayState from './states/play.jsx'

class Game extends Phaser.Game {
  constructor() {
    super(864, 480, Phaser.AUTO, 'game');
    this.state.add('menu', MenuState);
    this.state.add('play', PlayState);
    this.state.start('play');
  }
}

new Game();