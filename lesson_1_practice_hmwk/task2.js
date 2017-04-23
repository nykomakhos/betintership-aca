// Try to write a function which returns a hex code of random color
function getHexOfRandomColor() {
var col="#";
	for (i=0; i<6; i++) { 									
		var num = Math.floor(Math.random() * 16);			
		col= col +(num).toString(16);
		};
	return col;
}

getHexOfRandomColor();



//Solution #2
var a = '#' + Math.random().toString(16);
console.log(a, a.substr(2,6));
