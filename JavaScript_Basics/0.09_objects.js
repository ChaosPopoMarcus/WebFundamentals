
//object literal
var player = {
	name 				: "",
	life 				: 100,
	damage 				: 0, //attackPoints
	hasSniperRifle 		: true,
	hasSword			: true,
	rank 				: ["soldier", "spartan", "barbarian"],


	//METHODS
	quest 				: function(){
		console.log("Sir, would you go rob this store?");
	},

	fightme				: function(){
		console.log("Throw hands " + this.name + "!");
	},

	attack 				: function(target){
		if (target.life > this.life) {
		var remain = (target.life - this.damage)
		console.log(this.name + " attacks " + target.name + " for " 
			+ this.damage +" damage. "
		 	+ target.name + " has " + remain + " hp. "
		 	+ target.name + " caught a fat L.");
		}
		
	},

	pickedup			: function(){
		if (this.hasSword === true) {
			console.log(this.name + " picked up the excaliber.");
		}
	},

};

var saul = Object.create(player);
//PROPERTIES
saul.name = "Saul";
saul.life = 100;
saul.damage = 20;
saul.hasSniperRifle = false;

console.log(saul.name);
console.log(saul.life);
console.log(saul.hasSniperRifle);

var popo = Object.create(player);

popo.name = "Popo";
popo.life = 1;
popo.damage = 100;
popo.hasSniperRifle = true;
popo.rank = "spartan";
popo.fightme();
popo.attack(saul);
popo.pickedup();




