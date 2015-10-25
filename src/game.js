var game = new Phaser.Game(864, 480, Phaser.AUTO, 'game');
game.state.add('menu', menu_state);
game.state.start('menu');
