
var bill = prompt('What is your bill');
var state = prompt('What state is this all going down in');
var tax =  '\.' + 55;
var total ='\$' + bill + tax;


if(state === 'wi'){
	console.log(total);
}
else{
	console.log(bill);
}
