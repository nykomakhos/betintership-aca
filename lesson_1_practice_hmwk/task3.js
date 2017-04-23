 // Try to write a function which will return a guid
 // GUID (or UUID) is an acronym for 'Globally Unique Identifier' (or 'Universally Unique Identifier'). It is a 128-bit integer number used to identify resources. 


function getGuid() {
	var guid="";
	for (i=0; i<32; i++) { 									//128-bit or 32 HEX numbers
		var num = Math.floor(Math.random() * 16);			//create random interger number to conver it to HEX on next line
		guid= guid +(num).toString(16);
		};
	return guid;
}
getGuid();


//Solution 2
function s4() {
	return Math.random().toString(36).substr(2,4);
}
var s = s4(4)+s4(4) + "-" + s4(4) + "-" + s4(4) + "-" + s4(4) + s4(4)+s4(4)+s4(4);