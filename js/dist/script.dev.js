"use strict";

var month1 = prompt("Enter first month salary", '1');
var month2 = prompt("Enter second month salary", '2');
var result1 = +month1 + +month2;
alert("You have extra bonus! Your total salary was: ".concat(result1++, "$ it's increase for 1$ and now it is: ").concat(result1, "$"));
var result2 = result1 >= 2000 ? "I\'m ready to work" : "I\'m out";
alert("".concat(result2));