
var bill = prompt('What is your bill');
var state = prompt('What state is this all going down in');
var string = state.toLowerCase();
var sub = Math.round(bill);
console.log(sub);
var tax = 0.55;
var stateTax= Math.round(sub + tax);
var ansOne='subtotal:'+sub;
var ansTwo='tax:'+tax;
var asnThree='total:'+stateTax;









if(string === 'wi'){
	console.log(ansOne);
	console.log(ansTwo);
	console.log(asnThree);
	
	
}
