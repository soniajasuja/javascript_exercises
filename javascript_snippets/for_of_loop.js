/**
 * 
 * for..of iterates through list of elements (i.e) like Array and returns the elements one by one
 * Unlike for..in which iterates through index
 * 
 */

let arr = ['Kate', 'Mary', 'John', 'Smith'];
//for in - Gives the index
for (let value in arr) {
    console.log(arr[value]);
}

//for of - Gives the value
for (let value of arr) {
    console.log(value);
}

let string = "Javascript";
for (let char of string) {
 console.log(char);
}