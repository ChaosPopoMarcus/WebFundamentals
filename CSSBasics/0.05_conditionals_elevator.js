

var elevatorUp = true;
var elevatorDown = true;
var elevatorBroken = false;
var elevatorIsStuckWhileWeAreOnIt = true;
var elevatorNumber = 13;


if (elevatorUp === true) {
	console.log("Going up!");
} else {
	console.log("Going Down!");

} 

if (elevatorBroken) {
	console.log("Elevator idle. Begin to panic.");
} else {
	console.log("GG WP.");
}

if (elevatorIsStuckWhileWeAreOnIt) {
	console.log("You are under arrest. You may accept your fate.");
}

if (elevatorBroken || elevatorDown) {
	console.log("Houston, we have a problem.");
}

if (elevatorNumber === 13 && elevatorDown) {
	console.log("Going down...to your DEMISE!!")
}