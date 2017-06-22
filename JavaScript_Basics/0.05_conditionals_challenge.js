var enemy = 3
var ally = 1

if (enemy < ally) {
	console.log("DEFEAT. Stop playing widowmaker.");
} else {
	console.log("Score....three to one.");
} 
if (enemy == ally) {
	console.log("Draw")
} else if (enemy < ally) {
	console.log("Victory");
}



function DivsThree(array) {
	var array = [];
	var threes = [];
	var fives = [];
for (var i = 0; i < array.length; i++) {
	if (array[i] % 3 == 0 && array[i] % 5 ==0) {
		threes.push(array[i]) & fives.push(array[i]);
	  }
	}
	console.log(threes, fives);	
}

DivsThree(15);