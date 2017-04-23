// Try to write a function which gets a string like this: '[object ${name}]' and returns '${name}', where ${name} is any text.
var s;
function nameOfObject(s) {
    return s.slice(8, -1);
}

nameOfObject('[object hello world]');


