// scoping
// let’s create a calculator. let’s start from avoiding global codes by using:
// (function() {
//     // your code here
// })();
// have methods for addition, multiplication, subtraction and division, which share their result in common.
// make calculation for first 5 members of fibonacci sequence and calculate their arithmetical mean and log all the values.
// create a copy of your code and do “hoisting” manually.

(function(operand, x, y) {
    var result, x, y;
    var operand;
    switch(operand) {
	   	case '+':
	   		result = x + y;
	   		break;
	   	case '*':
	   		result = x * y;
	   		break;
	   	case '-':
	   		result = x - y;
	   		break;
	   	case '/':
	   		if (y===0) {
	   			result = "Cannot divide by zero";
	   		} else {
	   			result = x/y;
	   		}
	   		break;
	   	case 'fibonacci':
	   		function fib(n) {
				    if(n>2) {
				    	return fib(n-1) + fib(n-2);
				    	} else {return 1;}
				    }
			result = fib(6);
			break;
		case 'arithMean':
			function arith(n){
				return (1 + n)*n/ 2;
			} 
			result = arith(5);
			break;
		default:
			console.log('Please select operation.');
	    }; 
	console.log(operand, ": ", result);
	result=0;
})('');