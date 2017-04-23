// create an API which:
// * have some method for setting a ‘Symbol(PrimitiveValue)’ property of an object to be equal to given value
// * and during the process overrides valueOf method of that object to return the value of that property

// to create an API you should have a immediately called function:
// ```(function() {

// })();
// ```
// in the body of which you can have some private values and you should make some function(s) and/or 
//object(s) global by assigning them to a property of window.

// changing task to make it more clear:

// You should provide me two global functions: setPrimitive, and changePrimitve. 
//First one should get an object and a primitive and will set that in that object and make sure that it's valueOf 
//returns that primitive. While the second one shuld change that primitive for given object.