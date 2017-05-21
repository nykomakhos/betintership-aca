(function() {
    'use strict';
//при вызове setPrimitive(obj, primitive) 
//у твоего обьекта должно появиться свойство primitiveValue, значение которого будет переданный primitive

//var a={},setPrimiteve(a,5)  a.valueOf()//5
//changePrimiteve(a,8)  a.valueOf()//8

//этот primitiveValue должен быть not enumerable, и должет содержать случайную часть
//так же тебе нужно написать valueOf....и сделать так чтобы и setPrimitive , и  changePrimitive он был одинаков

    var object = {};
    var primitiveValue;
    window.setPrimitive = function(object, primitiveValue) { 
        this.valueOf = primitiveValue;
        this.id = "!do_" + Math.random().toString().substr(2,8);
    };

    window.changePrimitive = function(object, primitiveValue) {
        this.valueOf = primitiveValue;
    };
}());


