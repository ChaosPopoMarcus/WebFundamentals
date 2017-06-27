
for (var i = 0; i <= 100; i+=10) {
	if (i == 60) {
		console.log("sixty")
	} else {
		console.log(i)
	}

} 	

var friends = ["Keith", "Finn", "Allania", "Dylan"]
for (var i = 0; i < friends.length; i++) {
	console.log(friends[i])
}

function Product(length,width) {
	var area = length * width
	console.log(area)
}
Product(5,3);
for (var i = 0; i <=50; i++) {
	if (i % 2 == 0) {
		console.log("Mizz");
	} else if (i % 3 == 0) {
		console.log("Muzz");
	} else if (i % 5 == 0 && i % 3 == 0) {
		console.log("Mizz Muzz")
	} else {
		console.log(i)
	}
}

var languages = ["Python", "CSS", "HTML", "jQuery", "Bootstrap"]
console.log(languages[2]);


var driver = {
	name 		: "",
	speed 		: 20, //mph
	certified	: true,
	attitude	: ["good", "bad"],
	//******************
	anger		: function(target) {
		var difference = target.speed - this.speed 
		if (difference > 20) {
			console.log("OH C'mon THIS IS BULL****!! " + "F*** YOU!! " + target.name + "!")
		}
	},

	trash		: function(target){
		if (this == Jim) {
			var angry = "notgood"
			if (angry = "notgood") {
			console.log("I AM GOING TO ROAST YOU TO CHARCOAL! BOI!!");
			}
		} else if (target.speed < this.speed) {
			console.log("See you later... " + target.name + "!" + " MADA MADA!")
		}
	},

};
var Jim = Object.create(driver);
Jim.name = "Jim";
Jim.speed = 50;
Jim.certified = false;
Jim.attitude  = "bad";

var Popo = 	Object.create(driver);
Popo.name = "Popo";
Popo.speed = 75;
Popo.certified = true;
Popo.attitude = "good";

var Bob = Object.create(driver);
Bob.name = "Bob";
Bob.speed = 20;
Bob.certified = true;
Bob.attitude = "good"

console.log("           **************************")
console.log("           **************************")
console.log("					STORYLINE")
console.log("           **************************")
console.log("           **************************")

Jim.trash(Bob);
Jim.anger(Popo);


