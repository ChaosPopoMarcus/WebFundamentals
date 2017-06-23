//Location

function location(city,state) {
	console.log("I am from " + city + ", " + state)
}

location("Indianapolis","Indiana");


function bills(rent, water, electricity, cable){
	var bills = rent + water + electricity + cable
	console.log("You need to pay " + bills + " dollars in bills.")
}

bills(200,100,249,39);

function oddsevens(x) {
	if (x % 2 === 0) {
		console.log("Your number is even.")
	} else {
		console.log("Your number is odd.")
	}
}
 oddsevens(5);
