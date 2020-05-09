/**
 * 
 * let is block scoped while var is not
 * const is used to assign a constant value to the variable, its value is fixed and can't be changed
 * Changing the value of const will throw an error
 */

if (true) {
    var a = 40;

    console.log(a); //40
}
console.log(a); // undefined


const LANGUAGES = ['Kate', 'Mary', 'John'];
// const LANGUAGES = 'Robbert'
// or
// const LANGUAGES = ['Robbert']
// will throw an error
LANGUAGES.push('Robbert');
console.log(LANGUAGES);
