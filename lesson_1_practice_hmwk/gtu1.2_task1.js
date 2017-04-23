// wrappers
// try to wrap 1, 2, true, false, 12, 541 values in String wrapper and see the representation of that object in console. 
// call toString and valueOf functions on the wrapped object and try the same also for the case when it was DECLARED in its default wrapper.
// try to fix valueOf for the objects wrapped in String wrapper.
// wrapp true, false, 0, 1, '', 'hello' in their default wrappers and try to convert that wrapped object to boolean.

var arr0 = [1, 2, true, false, 12, 541]; 
for (var i = 0; i < arr0.length; i++) {
    var S = new String(arr0[i]); // String wrapped object 
    console.log(S); // representation of that object in console
    console.log("toString: ", S.toString());
    console.log("valueOf: ", S.valueOf());
}


//try the same also for the case when it was DECLARED in its default wrapper.
//valueOf function returns only string also in cases when it got a number as the argument, 
//so the problem is to change their valueOf to return number it it’s a number wrapped in string and boolean if it’s a boolean.
var oWrapper;
var arr = [true, false, 0, 1, '', 'hello']; 
function createDefaultWrapper(i,item) {
	var Ob;
	if(typeof(item) === "boolean"){
		Ob = new Boolean(arr[i]);
	} else if (typeof(item) === "number") {
		Ob = new Number(arr[i]);
	} else if (typeof(item) === "string") {
		Ob = new String(arr[i]);
		Ob.myValueOf = 
	};
	return S;
}
for (var i = 0; i < arr.length; i++) {
    oWrapper = createDefaultWrapper(i,item);
    console.log(oWrapper); // representation of that object in console
    console.log("toString: ", oWrapper.toString())
    console.log("valueOf: ", oWrapper.valueOf());
}






