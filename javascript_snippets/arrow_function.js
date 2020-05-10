/**
 * 
 * ES6 supports arrow function, refer below for the old & new syntax
 * Arrow Functions Return Value by Default
 * 
 */

function regularAdd (num1, num2) {
    return num1 + num2;
}


var arrowAdd = (num1, num2) => {
    return num1 + num2;
}

hello = () => "I am Single Line Arrow Function";

 module.exports = {
    regularAdd,
    arrowAdd
 }