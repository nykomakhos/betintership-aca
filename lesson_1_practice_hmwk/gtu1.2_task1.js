// wrappers
// try to wrap 1, 2, true, false, 12, 541 values in String wrapper and see the representation of that object in console. 
// call toString and valueOf functions on the wrapped object and try the same also for the case when it was DECLARED in its default wrapper.
// try to fix valueOf for the objects wrapped in String wrapper.
// wrapp true, false, 0, 1, '', 'hello' in their default wrappers and try to convert that wrapped object to boolean.

var arr0 = [1, 2, true, false, 12, 541]; 
for (var i = 0; i < arr0.length; i++) {
    var S = new String(arr0[i]); // String wrapped object 
    console.log(S); // representation of that object in console
    // console.log("toString: ", S.toString());
    // console.log("valueOf: ", S.valueOf());
}


//try the same also for the case when it was DECLARED in its default wrapper.
//valueOf function returns only string also in cases when it got a number as the argument, 
//so the problem is to change their valueOf to return number it it’s a number wrapped in string and boolean if it’s a boolean.
var oWrapper={};
var arr1 = [true, false, 0, 1, '98', 'hello']; 
function createDefaultWrapper(i) {
	var Ob;
	Ob = new Object(arr1[i]);
	if (Ob === 'true') {return true};
	if (Ob === 'false') {return false};
	if (!isNaN(+Ob)) {return (+Ob)};
	return Ob;
}
for (var i = 0; i < arr1.length; i++) {
    oWrapper = createDefaultWrapper(i);
    console.log(oWrapper); // representation of that object in console
    // console.log("toString: ", oWrapper.toString())
}






