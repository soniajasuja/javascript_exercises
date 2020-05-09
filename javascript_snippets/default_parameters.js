/**
 * Default function parameters allow named parameters to be initialized 
 * with default values if no value or undefined is passed.
 */

let mandatoryA = (a, b = 10) => {
    return a + b;
}

console.log(mandatoryA(20))

let mandatoryB = (a=10, b, c=30) => {
    return a + b + c;
}

console.log(mandatoryB(10,20))

