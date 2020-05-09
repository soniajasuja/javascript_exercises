/**
 * 
 * ES6 supports arrow function, refer below for the old & new syntax
 */

function oldCalculateSum (num1, num2) {
    console.log(num1 + num2);
}

oldCalculateSum(2,3);


var newCalculateSum = (num1, num2) => {
    console.log(num1 + num2);
}

newCalculateSum(11, 12)