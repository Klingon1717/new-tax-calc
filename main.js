
var bill = prompt('What is your bill');
var state = prompt('What state is this all going down in');
var sub = Math.round(bill * 100)/100;
console.log(sub);
var tax =  '\.' + 55;
var stateTax= Math.round(sub * tax *100)/100;
var wiTotal = Math.round(sub * 1.055 * 100)/100;





if(state === 'wi'){
	console.log(sub);
	console.log(tax);
	console.log(wiTotal);
}
