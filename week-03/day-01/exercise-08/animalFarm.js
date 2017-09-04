var Animal = function() {
  this.hunger = 50;
  this.thirst = 50;
  this.eat = function() {
    this.hunger -= 1;
  };
	this.drink = function() {
    this.thirst -= 1;
  };
	this.play = function() {
		this.thirst += 1;
		this.hunger += 1;
	}
};

var Farm = function() {
  this.animal = [];
  this.freeSpace = 5;
  this.breed = function() {
		if (this.freeSpace !== 0) {
			this.animal.push(new Animal());
			this.freeSpace -= 1;
		}
  };
	this.slaughter = function() {
		this.animal.sort(function(a1, a2) {
			return a2.hunger - a1.hunger;
		});
		this.animal.pop();
  };
};


//var n = new Animal();
//console.log(n.hunger);
//
//var f = new Farm();
//f.breed();
//f.breed();
//f.breed();
//console.log(f.animal);
//f.animal[1].eat();
//f.animal[0].drink();
//f.animal[2].play();
//f.slaughter();
//console.log(f.animal);


module.exports = {
	Animal: Animal,
	Farm: Farm
};
