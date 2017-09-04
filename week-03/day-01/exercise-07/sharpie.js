var Sharpie = function(color, width) {
  this.color = color;
  this.width = width;
	this.inkAmount = 100.0;
  this.use = function() {
    this.inkAmount -= this.width;
  };
};

module.exports = Sharpie;
//var n = new Sharpie("Blue", 24.5);
//n.use();
//console.log(n.inkAmount);