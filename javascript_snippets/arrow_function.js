/**
 * 
 * ES6 supports arrow function, refer below for the old & new syntax
 * Arrow Functions Return Value by Default:
 */

function oldCalculateSum (num1, num2) {
    console.log('Sum Old Function: ', num1 + num2);
}

oldCalculateSum(2,3);


var newCalculateSum = (num1, num2) => {
    console.log('Sum Arrow Function: ', num1 + num2);
}

newCalculateSum(11, 12)

hello = () => "I am Single Line Arrow Function";
console.log('Hi ', hello());