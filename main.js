
var bill = prompt('What is your bill');
var state = prompt('What state is this all going down in');
var string = state.toLowerCase();
var sub = Math.round(bill);
console.log(sub);
var tax = 3.52
var stateTax= Math.round(sub + tax);
var ans= 'subtotal:'+sub+'tax:'+tax+'total:'+stateTax;







if(string === 'wi'){
	console.log(ans);
	
	
}
