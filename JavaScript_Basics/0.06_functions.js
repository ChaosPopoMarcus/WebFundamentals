function Hiya(){
	console.log("Hello!");



}

Hiya();

var hey = function(){
	console.log("Hey");
}
hey();

function Yo(){
	console.log("Hi how are ya.")
}
 Yo();
var x = 2

function addtwo(){
 	var x = 2;
 	var y = 2; 
 	console.log(x * y);
 }
 addtwo();


 function numberEntered(x,y){
 	console.log("The answer is: ",x + y);
 }
 numberEntered(5,6);

 function fullName(First,Last){
  	console.log("Hello " + First, Last);
 }
 fullName("Marcus", "Henderson");

function petNameAndBreed(name, breed){
	var details = name + ", " + breed;
	return details

}

console.log(petNameAndBreed("Booby","O Bubba"));


//Sales Tax 0.07

function total(price, quantity){
	var tax = price * quantity * 0.07
	var total = price * quantity + tax
	console.log("Your total is", total + ".")

}
total(3.00,5);
