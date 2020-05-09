/**
 * 
 * Map holds key-value pairs. 
 * It’s similar to an array but we can define our own index. 
 * And indexes are unique in maps.
 * 
 */


var NewMap = new Map();

// Setting value in a Map
NewMap.set('firstName', 'John');
NewMap.set('middleName', 'Gary');
NewMap.set('lastName', 'Smith');


// Getting value from a map
console.log('First Name: ', NewMap.get('firstName'));


// Iterating a Map
for (let key of NewMap.keys()) {
    console.log('Key: ', key);
}
