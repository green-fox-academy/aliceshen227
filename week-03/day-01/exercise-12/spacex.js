var Rocket = function(type, n, m) {
  this.type = type;
  this.fuel = n || 0;
	this.launches = m || 0;
  this.launch = function() {
    if(this.type == 'falcon1') {
			if (this.fuel >= 1) {
				this.fuel -= 1;
				this.launches += 1;
			}
		}
		else if(this.type == 'falcon9') {
			if (this.fuel >= 9) {
				this.fuel -= 9;
				this.launches += 1;
			}
		}
  };
	this.refill = function() {
		var used = 0;
    if(this.type == 'falcon1') {
			used = 5 - this.fuel;
			this.fuel = 5;
		}
		else if(this.type == 'falcon9') {
			used = 20 - this.fuel;
			this.fuel = 20;
		}
		return used;
  };
	this.getStats = function() {
		let s = "name: " + this.type + ", fuel: " + this.fuel + ", launches: " + this.launches; 
		return s;
	}
};

var SpaceX = function(fuel) {
  this.fuel = fuel;
	this.rockets = [];
  this.addRocket = function(type) {
		this.rockets.push(type);
  };
	this.refillAll = function() {
		for (var i = 0; i < this.rockets.length; i++) {
			this.fuel -= this.rockets[i].refill();
		}
  };
	this.launchAll = function() {
		for (var i = 0; i < this.rockets.length; i++) {
			this.rockets[i].launch();
		}
	}
	this.buyFuel = function(amount) {
		this.fuel += amount;
	}
	this.getStats = function() {
		var nRockets = this.rockets.length;
		var nLaunches = 0;
		for (var i = 0; i < this.rockets.length; i++) {
			nLaunches += this.rockets[i].launches;
		}
		return "rockets: " + nRockets + ", fuel: " + this.fuel + ", launches: " + nLaunches;
	}
};

module.exports = {
	Rocket: Rocket,
	SpaceX: SpaceX
};

//test code
//var falcon1 = new Rocket('falcon1');
//var returnedFalcon9 = new Rocket('falcon9', 11, 1);
//
//falcon1.refill(); // 5
//falcon1.launch();
//
//console.log(falcon1.getStats()); // name: falcon1, fuel: 4, launches: 1
//console.log(returnedFalcon9.getStats()); // name: falcon9, fuel: 11, launches: 1
//var spaceX = new SpaceX(100);
//var falcon1 = new Rocket('falcon1', 0, 0);
//var falcon9 = new Rocket('falcon9', 0, 0);
//var returnedFalcon9 = new Rocket('falcon9', 11, 1);
//
//console.log(returnedFalcon9.getStats()); // name: falcon9, fuel: 11
//
//spaceX.addRocket(falcon1);
//spaceX.addRocket(falcon9);
//spaceX.addRocket(returnedFalcon9);
//
//console.log(spaceX.getStats()); // rockets: 3, fuel: 100, launches: 1
//spaceX.refillAll();
//console.log(spaceX.getStats()); // rockets: 3, fuel: 66, launches: 1
//spaceX.launchAll();
//console.log(spaceX.getStats()); // rockets: 3, fuel: 66, launches: 4
//spaceX.buyFuel(50);
//console.log(spaceX.getStats()); // rockets: 3, fuel: 116, launches: 4