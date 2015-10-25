var game = new Phaser.Game(864, 480, Phaser.AUTO, 'game');
game.state.add('menu', require('./states/menu'));
game.state.start('menu');
