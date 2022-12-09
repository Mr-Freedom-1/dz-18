let month1 = prompt("Enter first month salary", '1');
let month2 = prompt("Enter second month salary", '2');
let result1 = +month1 + +month2;
alert(`You have extra bonus! Your total salary was: ${result1++}$ it\'s increase for 1$ and now it is: ${result1}$`);
let result2 = result1 >= 2000 ? "I\'m ready to work" : "I\'m out";
alert(`${result2}`);