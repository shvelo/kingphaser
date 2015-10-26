class MenuState extends Phaser.State {
  preload() {
    this.load.image("title", "assets/gfx/title.png");
  }

  create() {
    var title = this.add.sprite(0, 0, "title");
    title.scale.setTo(3, 3);
  }
}

export default MenuState;