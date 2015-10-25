var menu_state = function () {

};

menu_state.prototype = Object.create(Phaser.State.prototype);

menu_state.prototype.preload = function () {
  this.load.image("title", "assets/gfx/title.png");
};

menu_state.prototype.create = function() {
  var title = this.add.sprite(0, 0, "title");
  title.scale.setTo(3, 3);
}
