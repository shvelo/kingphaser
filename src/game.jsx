import MenuState from './states/menu.jsx'

class Game extends Phaser.Game {
  constructor() {
    super(864, 480, Phaser.AUTO, 'game');
    this.state.add('menu', MenuState);
    this.state.start('menu');
  }
}

new Game();